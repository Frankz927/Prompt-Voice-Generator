'use client';
import { useState } from 'react';

export default function Home() {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');

  const handleButtonClick = () => {
    setRightText(leftText);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-center flex-1 p-4 overflow-y-auto" style={{ height: '70%' }}>
        <textarea
          value={leftText}
          onChange={(e) => setLeftText(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-4 w-1/3 resize-none text-black"
          style={{ minHeight: '100px' }}
        />
        <span className="text-2xl">&rarr;</span>
        <textarea
          value={rightText}
          readOnly
          className="border border-gray-300 rounded px-2 py-1 ml-4 w-1/3 resize-none text-black"
          style={{ minHeight: '100px' }}
        />
      </div>

      <div className="flex items-center justify-center flex-initial" style={{ height: '30%' }}>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ペースト
        </button>
      </div>

    </div>
  );
}
