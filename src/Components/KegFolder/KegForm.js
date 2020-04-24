import React from 'react';
import PropTypes from 'prop-types';

function KegForm(props) {
  return (
    <form className="createForm" onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Beer Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brewery" />
        <input
          type="text"
          name="price"
          placeholder="Price per Pint" />
        <input
          type="text"
          name="abv"
          placeholder="ABV" />
        <button type='submit'>{props.buttonText}</button>
      </form>
  );
}

KegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default KegForm;