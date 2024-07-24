import React from 'react';
import diceImg from '../images/diceImg.png';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();
  const playGame = () => {
    navigate('/game');
  };

  return (
    <div className='w-full h-[100vh] rounded-lg flex flex-col lg:flex-row'>
      <div className='flex justify-center lg:justify-end items-center w-full lg:w-[800px]'>
        <img src={diceImg} className='w-[300px] lg:w-[450px]' />
      </div>
      <div className='flex justify-center flex-col items-center lg:items-start lg:ml-8'>
        <h1 className='text-[60px] lg:text-[80px] font-bold'>DICE GAME</h1>
        <div className='flex justify-center lg:justify-start w-full lg:w-auto'>
          <button className='bg-white text-black w-[180px] lg:w-[220px] h-12 lg:h-14 text-[20px] lg:text-[24px] font-bold rounded-md hover:bg-slate-400 hover:text-white' onClick={playGame}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
