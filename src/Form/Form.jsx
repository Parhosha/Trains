import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Form.module.css';

const TaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={style.Container}>
        <div className={style.Wrap}>
          <center>
            <div className={style.top}>
              <label>Task</label>
              <div>
                <Field name="task" component="input" type="text" placeholder="" />
              </div>

              <label>Exercise First:</label>
              <div>
                <Field name="valueFirst" component="input" type="text" placeholder="" />
              </div>

              <label>Exercise Second:</label>
              <div>
                <Field name="valueSec" component="input" type="text" placeholder="" />
              </div>

              <div className={style.time}>
                <label> Time repeat: (number)</label>
                <div>
                  <Field component="input" type="number" min="0" id="hours" name="timeRep" />
                </div>
              </div>

              <div className={style.time}>
                <label>
                  {' '}
                  Time duration each <br /> (in sec):
                </label>

                <div>
                  <Field component="input" type="number" min="0" id="hours" name="timeDur" />
                </div>
              </div>

              <br />
              <label>
                {' '}
                Description: <br />
              </label>
              <br />
              <div>
                <Field
                  component="textarea"
                  type="text"
                  cols="20"
                  rows="3"
                  id="hours"
                  name="desciption"
                />
              </div>
            </div>
          </center>
        </div>
        <div className={style.Wrap} id={style.but}>
          <button component="button">Add new</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
