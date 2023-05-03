import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );

  // return (
  //   <React.Fragment>
  //     <div className={classes.backdrop} onClick={props.onConfirm} />
  //     <Card className={classes.modal}>
  //       <header className={classes.header}>
  //         <h2>{props.title}</h2>
  //       </header>
  //       <div className={classes.content}>
  //         <p>{props.message}</p>
  //       </div>
  //       <footer className={classes.actions}>
  //         <Button onClick={props.onConfirm}>Okay</Button>
  //       </footer>
  //     </Card>
  //   </React.Fragment>
  // );
};

export default ErrorModel;
