import React, { Component } from "react";
import "./App.css";
import "../node_modules/uikit/dist/css/uikit.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import JavascriptProjects from "./components/JavascriptProjects";
import AngularProjects from "./components/AngularProjects";
import ReactProjects from "./components/ReactProjects";
import ReactTwitter from "./components/ReactTwitter";
import base from "./firebase";
import firebase, { auth, provider } from "./firebase.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.fetchData();

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  fetchData() {
    const postsRef = firebase.database().ref("comments");
    postsRef.on("value", snapshot => {
      let comments = snapshot.val();
      let newState = [];
      for (let key in comments) {
        newState.push({
          id: key,
          project: comments[key].project,
          user: comments[key].user,
          userId: comments[key].userId,
          userImage: comments[key].userImage,
          title: comments[key].title,
          content: comments[key].content,
          time: comments[key].time
        });
      }
      this.setState({
        comments: newState
      });
    });
  }
  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  addComment = comment => {
    const commentsRef = firebase.database().ref("comments");
    commentsRef.push(comment);
    setTimeout(() => {
      this.fetchData();
    }, 200);
  };

  deleteComment = comment => {
    const commentRef = firebase.database().ref("comments/" + comment.id);
    commentRef.remove();
    setTimeout(() => {
      this.fetchData();
    }, 200);
  };

  editComment = comment => {
    const commentRef = firebase.database().ref("comments/" + comment.id);

    commentRef.update(comment);
    setTimeout(() => {
      this.fetchData();
    }, 200);
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar
            login={this.login}
            logout={this.logout}
            user={this.state.user}
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/JavascriptProjects" component={JavascriptProjects} />
            <Route path="/AngularProjects" component={AngularProjects} />
            <Route path="/ReactProjects" component={ReactProjects} />
            <Route
              path="/ReactTwitter"
              render={() => (
                <ReactTwitter
                  comments={this.state.comments}
                  user={this.state.user}
                  addComment={this.addComment}
                  editComment={this.editComment}
                  deleteComment={this.deleteComment}
                />
              )}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
