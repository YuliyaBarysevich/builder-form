import React, { useState } from 'react';
import Intro from './Intro.js';
import BuilderForm from './Form.js';
import SuccessMessage from './SuccessMessage.js';
import ErrorMessage from './ErrorMessage.js';
import useAxios from '../hooks/axios.js';
import useForm from '../hooks/form.js';
import validate from './validation.js';


const Result = () => {
  const [list, setList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setLoading] = useState(false);

  const [handleSubmit, handleChange, values, errors, setValues] = useForm(
    submitForm,
    validate
  );
  const [addNewData] = useAxios(list)

  function submitForm(form) {
    _addData(form);
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const _addData = async (data) => {
    setLoading(true);
    addNewData(data, (response) => {
      if(!response.error) {
        setList([...list, response]);
        setLoading(false);
        setValues({});
        setShowSuccess(true);
        setCurrentStep(1);
      } else {
        setLoading(false);
        setShowError(true);
      }
    })
  };

  return (
    <>
      <Intro currentStep={currentStep} />
      <BuilderForm
        values={values}
        errors={errors}
        currentStep={currentStep}
        nextStep={nextStep}
        previousStep={previousStep}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <SuccessMessage show={showSuccess} onHide={() => setShowSuccess(false)} />
      <ErrorMessage show={showError} onHide={() => setShowError(false)} />
    </>
  )
}

export default Result;
