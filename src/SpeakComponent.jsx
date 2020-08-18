import React from 'react';
import style from './Form/Speak.module.css';

const SpeakComponent = (props) => {
  return (
    <div key={props.key} className={style.block}>
      <h1>{props.task}</h1>
      <div className={style.Blockbody}>
        <p>{props.desc}</p>
      </div>
      <div className={style.BlockFot}>
        <p>{'Repeat: ' + props.timeRep + ' times'}</p>{' '}
        <p>{'Duration: ' + props.timeDur + ' sec'}</p>
      </div>
    </div>
  );
};

export default SpeakComponent;
