import React from 'react';
import { Page } from '../types';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  history: number[];
};

function Result({ setPage, history }: Props) {
  const onReplayHandler = () => {
    setPage('main');
  };

  return (
    <>
      <div className="share">
        <button
          type="button"
          onClick={() => {
            console.log('share');
          }}
        >
          결과 공유하기
        </button>
      </div>

      <h2>반응속도 테스트 결과</h2>

      <div className="result">
        <h1>{history.reduce((p, c) => p + c, 0) / history.length}</h1>
        <span>ms</span>
      </div>

      <div className="msg">
        <p>당신의 반응속도는</p>
        <p className="rank">하위 1%</p>
        <p>입니다.</p>
        <p className="rank-msg">반응속도가 너무 느립니다. 불가능한 ...</p>
      </div>

      <div className="replay">
        <button type="button" onClick={onReplayHandler}>
          테스트 다시하기
        </button>
      </div>
    </>
  );
}

export default Result;
