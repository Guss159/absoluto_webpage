import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Overlay from "react-bootstrap/Overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsappWidget = (props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const target = useRef(null);
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

  // TODO: background for  font awesomo
  // <div className="rounded-circle bg-primary" >
  return (
    <Container {...props}>
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
            ref={target}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ cursor: "pointer" }}
            onClick={onClickHandler}
          />
        </span>
      </div>

      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </Container>
  );
};

export default WhatsappWidget;
