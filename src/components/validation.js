export default function validate(values) {
  let errors = {};
  if (!values.firstName){
    errors.firstName = 'Required field';
  }
  if (!values.lastName){
    errors.lastName = 'Required field';
  }
  if (!values.businessName){
    errors.businessName = 'Required field';
  }
  if (!values.title){
    errors.title = 'Required field';
  }
  if (!values.address){
    errors.address = 'Required field';
  }
  if (!values.city){
    errors.city = 'Required field';
  }
  if (!values.state){
    errors.state = 'Required field';
  }
  if (!values.zip){
    errors.zip = 'Required field';
  } else if (values.zip.length !== 5){
    errors.zip = 'Zip must be 5 characters';
  }
  if (!values.email1) {
    errors.email1 = 'Required field';
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email1)) {
    errors.email1 = 'Invalid email format';
  }
  if (!values.phone1) {
    errors.phone1 = 'Required field';
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(values.phone1)) {
    errors.phone1 = 'Invalid phone format';
  }

  if (values.website && !/^([a-zA-Z]|[0-9]|-|_){2,}\.([a-zA-Z]{2,})$/.test(values.website)) {
    errors.website = 'Invalid phone format';
  }
  return errors;
};