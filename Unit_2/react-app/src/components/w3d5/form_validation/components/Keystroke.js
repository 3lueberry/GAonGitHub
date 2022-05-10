import React, { useEffect, useState } from "react";

const Keystroke = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  useEffect(() => {
    setValidEmail(inputEmail.includes("@"));
  }, [inputEmail]);

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
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
              value={inputEmail}
              onChange={handleEmailChange}
              placeholder="Email"
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

export default Keystroke;
