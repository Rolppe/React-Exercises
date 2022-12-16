import React from "react";
import Switch from "../components/Switch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Settings(props) {
  // useEffect(() => {
  //   getSettings(props.setTwoHoursProgram, props.setThreeHoursProgram);
  // }, []);

  // useEffect(() => {
  //   storeSettings(props.twoHoursProgram, props.threeHoursProgram);
  // }, [props.twoHoursProgram, props.threeHoursProgram]);
  return (
    <main style={{ padding: "1rem 0" }}>
      <Container>
        <Row>
          <Col xs={2}>
            <Switch
              checked={props.twoHoursProgram}
              onChange={() => {
                props.setTwoHoursProgram(!props.twoHoursProgram);
              }}
            />
            <h1>2h program</h1>
          </Col>
          <Col xs={2}>
            <Switch
              checked={props.threeHoursProgram}
              onChange={() => {
                props.setThreeHoursProgram(!props.threeHoursProgram);
              }}
            />
            <h1>3h program</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

// <button onClick={chanceState}>Chache state</button>
// <h2>{props.twoHours ? "Settings" : " "}</h2>
// <Switch
//   isOn={value}
//   onColor="#f0f"
//   handleToggle={() => {
//     setValue(!value);
//     props.setTwoHours(!props.twoHours);
//   }}
// />
