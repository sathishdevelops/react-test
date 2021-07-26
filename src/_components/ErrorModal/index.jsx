import React from "react";
import { Modal } from "react-bootstrap";
import "./styles.scss";
import errorimage from "../../assets/images/error.svg";
import { Link, useHistory } from "react-router-dom";

function ErrorModal({ message }) {
  const history = useHistory();
  function refreshPage() {
    history.push("/");
  }
  return (
    <Modal
      className="modal-background "
      dialogClassName="modal-lg"
      show
      centered
    >
      <Modal.Body>
        <div className="text-center">
          <img src={errorimage} width="75" className="text-center p-2" />
        </div>
        <h5 className="text-center p-2">{message}</h5>
        <p className="fw-normal mb-3 text-center">
          Please configure Sprints and scope for the chart to run.{" "}
          <a
            target="_blank"
            href="https://wiki.berkshiregrey.com/pages/viewpage.action?pageId=39028621"
          >
            Visit here for the set-up details.
          </a>
        </p>
        <div className="text-center mt-3">
          <button type="button" className="btn btn-info" onClick={refreshPage}>
            Go back to home
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export { ErrorModal };
