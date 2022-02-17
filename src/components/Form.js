import React from 'react';
import { Form, Container } from 'react-bootstrap';
import PersonalInfo from './PersonalInfo';
import Quiz from './Quiz';

const BuilderForm = (props) => {
  return (
    <>
    <Container className="form-wrapper">
      <Form onSubmit={props.handleSubmit} noValidate>
        {props.currentStep === 1 && (
          <PersonalInfo
            values={props.values}
            errors={props.errors}
            onChange={props.handleChange}
            nextStep={props.nextStep}
          />
        )}
        {props.currentStep === 2 && (
          <Quiz
            values={props.values}
            onChange={props.handleChange}
            previousStep={props.previousStep}
            isLoading={props.isLoading}
          />
        )}
      </Form>
    </Container>
    </>
  )
}

export default BuilderForm;