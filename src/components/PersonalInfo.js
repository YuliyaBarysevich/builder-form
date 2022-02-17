import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Container, ButtonGroup } from 'react-bootstrap';
import validate from './validation';

const PersonalInfo = (props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});

  const _continue = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const handleZip = (e) => {
    const zipValue = e.target.value;
    e.target.value = zipValue.slice(0, 5);
    props.onChange(e);
  };

  const handlePhone = (e) => {
    const phoneValue = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !phoneValue[2] ? phoneValue[1] : `(${phoneValue[1]}) ${phoneValue[2]}${(`${phoneValue[3] ? `-${phoneValue[3]}` : ''}`)}`;
      props.onChange(e);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if(props.values) {
      setErrors(validate(props.values));
    }
  }, [props.values])

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    const containsInErrors = errorKeys.map((el) => !Object.keys(props.values).includes(el))
    // console.log('errorKeys', errorKeys)
    // console.log('containsInErrors', containsInErrors)
    if(errorKeys.length === 0 && containsInErrors.length === 0){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [errors])

  return (
    <>
      <Container className="step-one">
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="firstName">
              <Form.Label>
                First Name<span>*</span>
              </Form.Label>
              <Form.Control 
                type="text"
                size="lg"
                name="firstName"
                required
                isValid={!errors.firstName}
                value={props.values.firstName || ''}
                onChange={props.onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4" controlId="lastName">
              <Form.Label>
                Last Name<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="lastName"
                required
                isValid={!errors.lastName}
                value={props.values.lastName || ''}
                onChange={props.onChange} 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="businessName">
              <Form.Label>
                Company<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="businessName"
                required
                isValid={!errors.businessName}
                value={props.values.businessName || ''} 
                onChange={props.onChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4" controlId="title"> 
              <Form.Label>
                Title<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="title"
                required
                isValid={!errors.title}
                value={props.values.title || ''}
                onChange={props.onChange} 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
            <Form.Group className="mb-4" controlId="address">
              <Form.Label>
                Business Address<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="address"
                required
                isValid={!errors.address}
                value={props.values.address || ''}
                onChange={props.onChange} 
              />
            </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="address2">
            <Form.Label>
              Apartment/Suite
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              name="address2" 
              value={props.values.address2 || ''}
              onChange={props.onChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="city">
              <Form.Label>
                City<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="city"
                required
                isValid={!errors.city}
                value={props.values.city || ''}
                onChange={props.onChange} 
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4" controlId="state">
              <Form.Label>
                State<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="state"
                required
                isValid={!errors.state}
                value={props.values.state || ''}
                onChange={props.onChange} 
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-4" controlId="zip">
              <Form.Label>
                Zip<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="zip"
                required
                isValid={!errors.zip}
                isInvalid={errors.zip && errors.zip !== 'Required field'}
                value={props.values.zip || ''}
                onChange={handleZip} 
              />
              <Form.Control.Feedback
                type="invalid"
                style={{
                  display:
                    errors.zip && errors.zip !== 'Required field'
                      ? 'block'
                      : 'none'
                }}
              >
                {errors.zip}

              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-4" controlId="email1">
              <Form.Label>
                Email<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="email1"
                required
                isValid={!errors.email1}
                isInvalid={errors.email1 && errors.email1 !== 'Required field'} 
                value={props.values.email1 || ''}
                onChange={props.onChange}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{
                  display:
                    errors.email1 && errors.email1 !== 'Required field'
                      ? 'block'
                      : 'none'
                }}
              >
                {errors.email1}

              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4" controlId="phone1">
              <Form.Label>
                Phone Number<span>*</span>
              </Form.Label>
              <Form.Control 
                type="text"
                size="lg"
                name="phone1"
                required
                isValid={!errors.phone1}
                isInvalid={errors.phone1 && errors.phone1 !== 'Required field'}
                value={props.values.phone1 || ''}
                onChange={handlePhone}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{
                  display:
                    errors.phone1 && errors.phone1 !== 'Required field'
                      ? 'block'
                      : 'none'
                }}
              >
                {errors.phone1}

              </Form.Control.Feedback> 
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-4" controlId="website">
              <Form.Label>
                Website<span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="website"
                isInvalid={errors.website && errors.website !== 'Required field'}
                isValid={!errors.website && props.values.website }
                value={props.values.website || ''}
                onChange={props.onChange}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{
                  display:
                    errors.website && errors.website !== 'Required field'
                      ? 'block'
                      : 'none'
                }}
              >
                {errors.website}

              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select
              size="lg"
              name="proficiency"
              onChange={props.onChange}
              value={props.values.proficiency}
            >
              <option value="">What best describes you?</option>
              <option value="General contractor/builder">General contractor/builder</option>
              <option value="Architect/designer">Architect/designer</option>
              <option value="Real estate developer">Real estate developer</option>
              <option value="Property manager">Property manager</option>
              <option value="Government">Government</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Educational or religious institution">Educational or religious institution</option>
              <option value="Corporation">Corporation</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <ButtonGroup>
            <Button
              className="step1-button"
              type="button"
              name="next"
              disabled={isDisabled}
              onClick={_continue}
              variant="dark"
            >
              Next
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  )
}

export default PersonalInfo;