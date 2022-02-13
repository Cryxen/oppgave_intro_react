import Child from './components/MyComponent.js';
import Wrapper from './components/Wrapper.js';
import Food from './components/Food.js';
import Alert from './components/Alert.js';
import { useState } from 'react';

// Hooks
function Forms() {
  const [showInputValue, setShowInputValue] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleshowInputValue = () => {
    setShowInputValue(!showInputValue);
  };

  return (
    <>
      <Alert
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleshowInputValue={handleshowInputValue}
      />
      {showInputValue ? <p>{inputValue}</p> : null}
    </>
  );
}

// variabler
const foods = ['Pizza', 'Hamburger', 'Coke'];

// functions

const App = () => (
  <div>
    <p>Read the README.md to see the tasks</p>
    <Wrapper>
      <Child title="It works!" />
      <Food foods={foods} />
      <Forms />
    </Wrapper>
  </div>
);

export default App;
