import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { PrimaryButton } from '../components/Button';
import Switch from '../components/Switch/Switch';
import TaskList from '../components/TaskList/TaskList';
import Loader from '../components/Loader/Loader';

import ThemedPrimaryButton from '../components/Button/ThemedPrimaryButton';
import SwitchTheme from '../components/SwitchTheme/SwitchTheme';
import Input from '../components/Input/Input';

const initialCount = 0;

const init = (count) => {
  return { count };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
    default:
      throw new Error('Unknown action');
  }
};

const Dashboard = () => {
  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [isActive, setActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [userInputNumber, setUserInputNumber] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const refInput = useRef(null);

  const factorial = (number) => {
    // compute factorial value
    return number;
  };

  const memoizedValue = useMemo(() => factorial(userInputNumber), [
    userInputNumber,
  ]);

  const handleButtonClick = () => {
    //console.log(userInput);
    //const newTasks = tasks.concat(userInput);
    //setTasks([userInput, ...tasks]);
    setTasks((prevTasks) => [userInput, ...prevTasks]);
  };

  const handleUserInputChange = (event) => {
    //console.log(event);
    const value = event.target.value;
    setUserInput(value);
  };

  const handleUserInputChange2 = (event) => {
    //console.log(event);
    const value = event.target.value;
    setUserInput2(value);
  };

  useEffect(() => {
    // degisiklik oldugunda calis
    console.log('useEffect calisti');
    refInput.current.focus();
  });

  const checkUserInput = useCallback(() => {
    if (userInput.length > 0) {
      // dikkat !!
    }
  }, [userInput]);

  useEffect(() => {
    // degisiklik oldugunda calis

    checkUserInput();

    console.log('useEffect calisti - userInput:' + userInput);
  }, [userInput]);

  useEffect(() => {
    // degisiklik oldugunda calis

    checkUserInput();

    console.log('useEffect calisti - userInput2:' + userInput2);
  }, [userInput2]);

  useEffect(() => {
    const mouseOver = () => {
      // todo
      console.log('mouse over');
    };
    const buttonAdd = document.getElementById('btn-add');
    if (buttonAdd) {
      buttonAdd.addEventListener('mouseover', mouseOver);
    }

    return () => {
      // clean-up
      if (buttonAdd) {
        buttonAdd.removeEventListener('mouseover', mouseOver);
      }
    };
  }, []);

  // if (!tasks.length) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      <div>
        <Input
          value={userInput}
          onChange={handleUserInputChange}
          ref={refInput}
        />

        <input
          type="text"
          value={userInput2}
          onChange={handleUserInputChange2}
        />
        <PrimaryButton
          text="Add new task"
          type="button"
          onClick={handleButtonClick}
        />
        <ThemedPrimaryButton
          id="btn-add"
          text="Add new task(theme)"
          type="button"
          onClick={handleButtonClick}
        />
      </div>
      <div style={{ marginTop: `20px` }}>
        <Switch
          isActive={isActive}
          onToggle={() => setActive((prevState) => !prevState)}
        />
      </div>
      <div style={{ marginTop: `20px` }}>
        <SwitchTheme />
      </div>
      <div style={{ marginTop: `20px` }}>
        <input
          type="number"
          value={userInputNumber}
          onChange={(event) => {
            setUserInputNumber(Number(event.target.value));
          }}
        />
        Result: {memoizedValue}
      </div>

      <div style={{ marginTop: `20px` }}>
        Count: {state.count}
        <button
          onClick={() =>
            dispatch({
              type: 'decrement',
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'increment',
            })
          }
        >
          Increment
        </button>
        {!tasks.length ? <Loader /> : <TaskList tasks={tasks} />}
      </div>
    </>
  );
};

export default Dashboard;
