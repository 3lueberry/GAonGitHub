import React, { useRef, useState } from "react";

const FormSubmission = () => {
  const emailInputRef = useRef("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const inputEmail = emailInputRef.current.value;

    if (inputEmail.includes("@")) {
      setValidEmail(true);
      setSubmittedEmail(inputEmail);
    }
  };
  return (
    <>
      <form className="container" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-sm-5">
            <input
              id="email"
              type="text"
              ref={emailInputRef}
              //   value={emailInputRef}
              //   onChange={handleEmailChange}
              //   placeholder="Email"
              //   aria-label="Email"
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
      <br />
      <h2>{validEmail ? "true" : "false"}</h2>
      <h2>{submittedEmail}</h2>
    </>
  );
};

export default FormSubmission;
