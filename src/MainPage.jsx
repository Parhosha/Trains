import { reduxForm } from 'redux-form';
import TaskForm from './Form/Form';
import SpeakComponent from './SpeakComponent';
import React, { useState, useEffect } from 'react';
import speak from './Form/Speker';
import style from './Form/Main.module.css';

let FormRedux = reduxForm({ form: 'Task' })(TaskForm);

const MainPage = (props) => {
  console.log(props);

  let SpeakArrComp = props.exercise.map((p) => (
    <SpeakComponent
      task={p.task}
      valueFirst={p.valueFirst}
      valueSec={p.valueSec}
      timeRep={p.timeRep}
      timeDur={p.timeDur}
      desc={p.desciption}
    />
  ));

  const onSubmit = (formData) => {
    console.log(formData);
    props.setTaskAC(formData);
  };

  return (
    <div>
      <div className={style.blocks} id="mainSpeak">
        <a href="#" onClick={() => speak(props.exercise)}>
          Voice
        </a>
        <br />
        <a href="#" onClick={() => props.clearAC()}>
          Clear
        </a>

        {SpeakArrComp}
      </div>
      <div className={style.blocks}>
        <FormRedux onSubmit={onSubmit}></FormRedux>
      </div>

      <div className={style.caption}>
        <h2>Caption:</h2>
        <p>
          Создайте свою программу тренеровок <br />и голосовой помощник проследит и подскажет со
          временем и очередностью упрожнений{' '}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default MainPage;
