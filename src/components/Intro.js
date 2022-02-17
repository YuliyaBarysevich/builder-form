import React from 'react';
import { Container } from 'react-bootstrap';
import StepList from './Steps';
const Intro = (props) => {
  return (
    <Container className="intro">
      <h1>
        Builder Pro<span>+</span> Registration
      </h1>
      <p>
        Complete this short application to save time and money, plus get the best selection, price and customer service for you and your clients.
      </p>
      <StepList currentStep={props.currentStep} />
    </Container>
  )
}

export default Intro;