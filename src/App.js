import { useState } from 'react';
import './App.css';

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const fullName = "SHAWN ASHLEE GUARIN";
  const section = "IT3A";
  const initialDisplay = "10 Things That Require Zero Talent";
  
  // Setting up the state
  const [disp, setDisp] = useState(initialDisplay);

  // Mapping of button clicks to the 10 talents
  const talents = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic"
  };

  // Handling number button click to show respective talent
  const handleNumberClick = (value) => {
    setDisp(talents[value]);
  };

  // Reset display to initial state
  const handleResetClick = () => {
    setDisp(initialDisplay);
  };

  // Show full name in uppercase
  const handleNameClick = () => {
    setDisp(fullName.toUpperCase());
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <h2>{`${fullName} - ${section}`}</h2>
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonContainer">
          <Key label={1} clickHandler={() => handleNumberClick(1)} />
          <Key label={2} clickHandler={() => handleNumberClick(2)} />
          <Key label={3} clickHandler={() => handleNumberClick(3)} />
          <Key label={4} clickHandler={() => handleNumberClick(4)} />
          <Key label={5} clickHandler={() => handleNumberClick(5)} />
          <Key label={6} clickHandler={() => handleNumberClick(6)} />
          <Key label={7} clickHandler={() => handleNumberClick(7)} />
          <Key label={8} clickHandler={() => handleNumberClick(8)} />
          <Key label={9} clickHandler={() => handleNumberClick(9)} />
          <Key label={0} clickHandler={() => handleNumberClick(0)} />
        </div>
        <div className="ButtonContainer">
          <Key label={"RESET"} clickHandler={handleResetClick} />
          <Key label={"NAME"} clickHandler={handleNameClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
