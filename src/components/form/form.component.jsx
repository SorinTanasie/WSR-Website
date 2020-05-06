import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";

import './form.styles.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="form">
        <h3>Get in touch</h3>
        <div className="name-email">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            input="input"
            required
            label="Email"
          />
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
            input="input"
            required
            label="Name"
          />
          </div>
          <FormInput
            name="feedback"
            type="text"
            value={this.state.feedback}
            handleChange={this.handleChange}
            required
            label="Mesaj"
          />

        <CustomButton type="submit" value="Submit" onClick={this.handleSubmit}>
          Trimite mesajul
        </CustomButton>
      </form>
    );
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit(event) {
    const templateId = "template_7YBje3Jq";
    const { name, email, feedback } = this.state;
    name & email & feedback
      ? this.sendFeedback(templateId, {
          message_html: this.state.feedback,
          from_name: this.state.name,
          reply_to: this.state.email,
        })
      : console.log("err");
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("default_service", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }
}
