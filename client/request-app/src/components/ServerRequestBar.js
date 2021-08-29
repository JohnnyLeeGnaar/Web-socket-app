import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServerRequestBar = (props) => {
  const { changeMessage, sendMessage, heading } = props;

  return (
    <>
      <Container>
        <h1>{heading}</h1>
        <Form>
          <Row className="flex-wrapper-row">
            <Form.Group as={Col} xs="10" lg="6" sm="6" md="6" controlId="form">
              <Form.Control
                type="input"
                className="form-input"
                placeholder="Send a message to the server"
                onChange={(e) => changeMessage(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              xs="10"
              lg="2"
              sm="2"
              md="2"
              controlId="submit-bttn"
            >
              <Button
                onClick={(e) => sendMessage(e)}
                className="form-button"
              >
                Send
              </Button>{" "}
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ServerRequestBar;
