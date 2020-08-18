import React from 'react';
import { Field } from 'redux-form';

const FieldComp = (props) => {
  return (
    <div>
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          {' '}
          <h1>Название упражнения</h1>
          <Field component="input" name="Task" type="text" placeholder="" />{' '}
        </div>

        <div>
          {' '}
          <h2>Упрожнение 1</h2>
          <Field component="input" name="Ex1" type="text" placeholder="" />{' '}
        </div>

        <div>
          {' '}
          <h2>Time</h2>
          <Field component="number" min="0" id="hours" name="hours" />{' '}
        </div>
      </form>
    </div>
  );
};

export default FieldComp;
