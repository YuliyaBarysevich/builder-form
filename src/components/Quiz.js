import React, {useEffect} from 'react';
import { Row, Form, ToggleButton, Button, ToggleButtonGroup, Spinner, Container, ButtonGroup } from 'react-bootstrap';
import { appliances, fixtures } from '../utils/checkbox-values';

const Quiz = (props) => {
  const _previous = (e) => {
    e.preventDefault();
    props.previousStep();
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <Container className="step-two">
      <Row className="appliances-section">
        <h3>What brands do you spec the most? Please click all that apply.</h3>
        <h4>Appliances</h4>
        <Row className="appliances-checkboxes">
          <ToggleButtonGroup type="checkbox" className="mb-2 appliances" name="appliances">
            {appliances.map((item, idx) => (
              <ToggleButton 
                key={idx}
                value={item.value} 
                id={item.value}
                name={item.value}
                // checked={checkedState[idx]}
                onChange={props.onChange}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        <Row className="other-appliances-container">
          <Form.Group controlId="other-appliances">
            <Form.Label>Other</Form.Label>
            <Form.Control as="textarea" rows={3} name="other-appliances" />
          </Form.Group>
        </Row>
      </Row>
      <Row className="fixtures-section">
        <h4>Fixtures</h4>
        <Row className="fixtures-checkboxes">
          <ToggleButtonGroup type="checkbox" className="mb-2 fixtures" name="fixtures">
            {fixtures.map((item, idx) => (
              <ToggleButton
                key={idx}
                value={item.value}
                id={item.value}
                name={item.value}
                onChange={props.onChange}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Row>
        <Row className="other-fixtures-container">
          <Form.Group controlId="other-fixtures">
            <Form.Label>Other</Form.Label>
            <Form.Control as="textarea" rows={3} name="other-fixtures" />
          </Form.Group>
        </Row>
      </Row>
      <Row className="button-group">
        <ButtonGroup>
          <Button
            onClick={_previous}
            type="button"
            name="back"
            variant="outline-dark"
          >
            Back
          </Button>
          <Button
            type="submit"
            name="next"
            variant="dark"
            disabled={props.isLoading}
          >
            {props.isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true" 
              />
            ) : null }
            Submit
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  )
}

export default Quiz;