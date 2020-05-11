import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../button/button.component";
import PopUp from '../pop-up/pop-up.component';

import './form.styles.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "", isSubmitted: false};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="form">
        <h2>Get in touch</h2>
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
        {this.state.isSubmitted && <PopUp/>}
      </form>
    );
  }

  handleChange = (e) => {
    
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit() {
    const templateId = "template_7YBje3Jq";
    const { name, email, feedback } = this.state;
    if(email&& name&& feedback!==''){
       this.sendFeedback(templateId, {
          message_html: feedback,
          from_name: name,
          reply_to: email,
        })
  }
      else console.log("err");
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("default_service", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.setState({isSubmitted:true});
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
