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

  const a = "";
  const b = null;
  const c = undefined;
  const d = 4;
  const e = "five";
  const f = a || b || c || d || e;

  let outEmail = <p>Invalid</p>;
  if (validEmail) outEmail = <p>Valid</p>;

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
      <h2>{validEmail ? "Valid" : "Invalid"}</h2>
      <h2>{validEmail && <p>Valid</p>}</h2>{" "}
      {/* logical && will print last set if all previous sets are truthy */}
      <h2>{!validEmail && <p>Invalid</p>}</h2>
      <h2>{outEmail}</h2>
      <h2>{f}</h2>
      <h2>{submittedEmail}</h2>
    </>
  );
};

export default FormSubmission;
