import React, { useCallback, useEffect, useState } from 'react';
import rank from '../static/rank';
import { Page } from '../types';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  history: number[];
};

function Result({ setPage, history }: Props) {
  const [avgReactionTime] = useState(
    history.reduce((p, c) => p + c, 0) / history.length
  );
  const [msg, setMsg] = useState({ title: '-', desc: '계산중...' });

  const onReplayHandler = useCallback(() => {
    setPage('main');
  }, [setPage]);

  useEffect(() => {
    const renderRsultMessage = () => {
      for (let index = 0; index < rank.length; index += 1) {
        const { time, title, desc } = rank[index];

        if (avgReactionTime <= time) {
          setMsg({ title, desc });
          return;
        }
      }

      const { title, desc } = rank[rank.length - 1];
      setMsg({ title, desc });
    };

    renderRsultMessage();
  }, [avgReactionTime]);

  return (
    <>
      <div className="share">
        {/* <button
          type="button"
          onClick={() => {
            console.log('share');
          }}
        >
          결과 공유하기
        </button> */}
      </div>

      <h2>반응속도 테스트 결과</h2>

      <div className="result">
        <h1>{avgReactionTime}</h1>
        <span>ms</span>
      </div>

      <div className="msg">
        <p>당신의 반응속도는</p>
        <p className="rank">{msg.title}</p>
        <p>입니다.</p>
        <p className="rank-msg">{msg.desc}</p>
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
