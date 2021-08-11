import { Component } from "react";
import "./App.css";
import { sendTS, tryMethodDecorator, tryPropsDecorator } from "insta-email";

class App extends Component {
  @tryPropsDecorator()
  state = {
    first: "Devlin",
    last: "Duldulao",
  };

  @tryMethodDecorator()
  sendEmail(): void {
    sendTS({
      mailto: "webmasterdevlin@gmail.com",
      body: "Hello",
      subject: "Hey sexy!",
    });
  }

  componentDidMount() {
    const me = this.state.first;
    console.log("me::", me);
    this.sendEmail();
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
