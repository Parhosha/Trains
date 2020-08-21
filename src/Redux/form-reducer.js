const ADDTASK = 'ADDTASK';
const CLEAR = 'CLEAR';

let inintReducer = {
  exercise: [
    {
      task: 'Повороты ног',
      valueFirst: 'В лево',
      valueSec: 'В право',
      timeRep: 2,
      timeDur: 5,
      desciption: 'Повороты ног в противоположные стороны с согнеутым коленем',
    },
    {
      task: 'Замок ног',
      valueFirst: 'Левая',
      valueSec: 'Правая',
      timeRep: 1,
      timeDur: 60,
      desciption: 'Повороты ног в противоположные стороны с согнеутым коленем',
    },
    {
      task: 'Нога к груди',
      valueFirst: 'Левая',
      valueSec: 'Правая',
      timeRep: 5,
      timeDur: 10,
      desciption: 'Повороты ног в противоположные стороны с согнеутым коленем',
    },
    {
      task: 'Поза кошки',
      valueFirst: 'Вниз',
      valueSec: 'Вниз',
      timeRep: 3,
      timeDur: 11,
      desciption: 'Повороты ног в противоположные стороны с согнеутым коленем',
    },
  ],
  created: 0,
};

const MainReducer = (state = inintReducer, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        exercise: [...state.exercise, action.data],
        created: 1,
        timeRep: action.timeRep,
        timeDur: action.timeDur,
        desciption: action.desciption,
      };

    case CLEAR:
      console.log('clear');
      return {
        ...state,
        exercise: [],
      };

    default:
      return state;
  }
};

export default MainReducer;

export const setTask = (data) => ({ type: ADDTASK, data });
export const clear = () => ({ type: CLEAR });

export const setTaskAC = (formData) => async (dispatch) => {
  dispatch(setTask(formData));
};
export const clearAC = () => async (dispatch) => {
  console.log('AC');
  dispatch(clear());
};
