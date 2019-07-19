import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // below is changed see part 230
  // renderInput(formProps) {
  //   return (
  //     <input 
  //       onChange={ formProps.input.onChange }
  //       value={ formProps.input.value }
  //     />
  //   )
  // }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    
    return (
      <div className={ className }>
        <label>{ label }</label>
        <input { ...input } autoComplete="off" />
        { this.renderError(meta) }
      </div>
    )
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{ error }</div>
        </div>
      )
    }
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
          <Field
            name="title"
            component={ this.renderInput }
            label="Enter title: "
          />
          <Field
            name="description"
            component={ this.renderInput }
            label="Enter description: "
          />
          <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = "Title can not be blank!!";
  }

  if (!formValues.description) {
    errors.description = "Description can not be blank!!";
  }
  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);