import React from "react";
import "./App.css";
import { sendTS, tryMethodDecorator, tryPropsDecorator } from "insta-email";

class App extends React.Component {
  @tryPropsDecorator()
  state = {
    first: "Devlin",
    last: "Duldulao",
  };

  @tryMethodDecorator()
  sendEmail() {
    sendTS({
      mailto: "webmasterdevlin@gmail.com",
      body: "Hello",
      subject: "Hey sexy!",
    });
  }

  componentDidMount() {
    let me = this.state.first;
    console.log("me::", me);
    this.sendEmail();
  }

  public render() {
    return <h1>Hello</h1>;
  }
}

export default App;
