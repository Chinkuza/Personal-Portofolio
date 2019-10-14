import React from "react";

function ContactForm() {
  return (
    <form id="contactForm" onsubmit="return validate()" method="post">
      <input
        className="formInput"
        type="text"
        id="name"
        name="name"
        autoCorrect="off"
        placeholder="Name?"
      />
      <input
        className="formInput"
        type="email"
        name="email"
        id="email"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="Email?"
      />
      <textarea
        className="formInput"
        name="message"
        id="message"
        placeholder="Message?"
        defaultValue={""}
      />
      <br />
      <input
        className="submitForm"
        type="reset"
        defaultValue="Clear your message"
      />
      <input className="submitForm" type="submit" defaultValue="Send" />
    </form>
  );
}

export default ContactForm;
