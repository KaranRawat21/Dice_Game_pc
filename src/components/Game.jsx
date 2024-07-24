import React from 'react';
import dice1 from '../images/1.png';
import dice2 from '../images/2.png';
import dice3 from '../images/3.png';
import dice4 from '../images/4.png';
import dice5 from '../images/5.png';
import dice6 from '../images/6.png';
import { useState } from 'react';

function Game() {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(0);
  const [userNumber, setUserNumber] = useState(null);
  const [computerNumber, setComputerNumber] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [msg, setMsg] = useState(null);

  const resetScore = () => setScore(0);
  const showRules = () => setRules(!rules);
  const selected = (event) => {
    const number = parseInt(event.target.textContent);
    setUserNumber(number);
    setMsg(null);
    setSelectedNumber(number);
  };
  const DiceNumberByComputer = () => {
    if (userNumber === null) {
      setMsg('You have not selected any number!');
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setComputerNumber(randomNumber);
    userNumber === randomNumber
      ? setScore((prev) => prev + randomNumber)
      : setScore((prevScore) => Math.max(prevScore - 2, 0));
    setUserNumber(null);
  };

  return (
    <div className='p-4 lg:p-16'>
      {/* Header of the game page */}
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8'>
        <div className='flex flex-col items-center mb-8 lg:mb-0'>
          <h1 className='text-[60px] lg:text-[80px] font-bold'>{score}</h1>
          <p className='text-[18px] lg:text-[20px] font-bold'>Total Score</p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-4'>
          <ul className='flex flex-wrap gap-4 lg:gap-5 justify-center'>
            {diceNumbers.map((number, index) => (
              <li
                key={index}
                className={`border-2 w-14 h-12 flex items-center justify-center text-[24px] lg:text-[30px] cursor-pointer font-bold ${selectedNumber === number ? 'bg-white text-black' : 'border-white'}`}
                onClick={selected}
              >
                {number}
              </li>
            ))}
          </ul>
          <p className='text-[16px] lg:text-[20px] font-bold'>Select Number</p>
        </div>
      </div>

      {/* Main of the game page */}
      <div className='flex flex-col items-center gap-4'>
        <img
          src={computerNumber ? diceImages[computerNumber - 1] : diceImages[0]}
          className='w-[200px] lg:w-[250px] cursor-pointer'
          onClick={DiceNumberByComputer}
        />
        <p className='text-red-500 font-bold text-[16px] lg:text-[18px]'>{msg}</p>
        <p className='text-[16px] lg:text-[20px] font-bold'>Click on Dice to roll</p>
        <div className='flex flex-col gap-4 lg:gap-5'>
          <button
            className='border-2 border-white rounded-md w-[180px] lg:w-[200px] h-10 lg:h-12 font-semibold text-[16px] lg:text-[18px] hover:bg-red-800 hover:border-white'
            onClick={resetScore}
          >
            Reset Score
          </button>
          <button
            className='border-2 border-white rounded-md w-[180px] lg:w-[200px] h-10 lg:h-12 font-semibold text-[16px] lg:text-[18px] bg-white text-black hover:bg-green-800 hover:text-white hover:border-white'
            onClick={showRules}
          >
            {!rules ? <p>Show Rules</p> : <p>Hide Rules</p>}
          </button>
        </div>
        {rules && (
          <div className='bg-pink-100 text-gray-800 font-semibold p-4 rounded-md mt-6 lg:mt-8'>
            <h1 className='text-[18px] lg:text-[20px]'>How to play dice game</h1>
            <p className='text-[14px] lg:text-[16px]'>
              Select any number <br /> Click on dice image <br /> After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice <br /> If you get a wrong guess, 2 points will be deducted
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
