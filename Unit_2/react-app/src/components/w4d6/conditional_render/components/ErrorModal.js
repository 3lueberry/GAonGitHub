import React from "react";
import styles from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return (
    <>
      <div className={styles.backdrop}>
        {" "}
        {/* onClick={props.okayClicked}> */}
        <div className={`${styles.board} ${styles.modal}`}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.okayClicked}>Okay</Button>
          </footer>
        </div>
      </div>
    </>
  );
};

const ErrorModal = (props) => {
  return (
    <>{ReactDOM.createPortal(<Overlay {...props} />, document.querySelector("#modal-root"))}</>
    // <>
    //   <Overlay {...props} />
    // </>
  );
};

export default ErrorModal;
