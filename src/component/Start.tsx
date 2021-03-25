import React from 'react';

function Start() {
  return (
    <>
      <div className="label">0/5</div>
      <progress id="progress" max="100" value="50" />

      <div className="start">
        <h1>클릭</h1>
        <p>클릭해주세요</p>
      </div>

      <div className="history">
        <div className="item">1번째 시도: 100ms</div>
        <div className="item">2번째 시도: 100ms</div>
      </div>
    </>
  );
}

export default Start;
