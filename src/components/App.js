import React, { useState } from 'react';
import Header from './Header';
import Timer from './Timer/Timer';

export default function App() {

  const [title, setTitle] = useState('Basic Timer');

  return (
    <div>
      <Header title={title} />
      <div className="mt-5">
        <Timer />
      </div>
    </div>
  );
}