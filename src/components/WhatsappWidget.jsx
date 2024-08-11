import { useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsappWidget = (props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const phoneNumber = "";

  const openWhatsapp = (phoneNumber) => {
    if (!phoneNumber) {
      window.alert("Invalid Phone Number");
      return false;
    }
    window.open(`https://wa.me/${phoneNumber}`);
    setMessage("");
  };

  const onClickHandler = () => {
    // TODO: if no mobile
    let mobile = false;
    if (mobile) {
      window.alert("Note olvides de implemtar esto");
    } else {
      setShow(!show);
    }
  };
  const handleClose = () => setShow(false);

  // TODO: background for  font awesomo
  // <div className="rounded-circle bg-primary" >
  return (
    <div>
      <div>
        <span className="fa-stack">
          <FontAwesomeIcon
            className="fw text-light fa-stack-2x"
            icon="fa-solid fa-circle"
            transform=" left-2"
            size="lg"
          />
          <FontAwesomeIcon
            className="text-primary fa-stack-1x"
            icon="fa-brands fa-whatsapp"
            size="2xl"
            flip={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ cursor: "pointer" }}
            onClick={onClickHandler}
          />
        </span>
      </div>
      <Modal
        className="mh-100 mw-100"
        show={show}
        onHide={handleClose}
        // size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Image src="src/assets/qrcode.svg" fluid rounded />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={openWhatsapp}>
            Abrir Whatsapp Web
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WhatsappWidget;
