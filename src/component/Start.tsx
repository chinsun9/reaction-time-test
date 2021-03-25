import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Page } from '../types';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
  setRootHistory: React.Dispatch<React.SetStateAction<number[]>>;
};

function Start({ setPage, setRootHistory }: Props) {
  const [isFirst, setIsFirst] = useState(true);
  const [state, setState] = useState(0);
  const [isClick, setIsClick] = useState(true);
  const [history, setHistory] = useState<number[]>([]);
  const [t0, setT0] = useState(0);

  const process = useCallback(() => {
    setIsClick(false);

    if (isFirst) {
      setIsFirst(false);
      return;
    }

    if (state + 1 >= 5) {
      setRootHistory(history);
      setPage('result');
      return;
    }

    // 클릭하면 안돼
    if (!isClick) {
      setState((prev) => prev - 1);
      return;
    }

    // 정상 클릭
    // 히스토리 추가
    setHistory((prev) => {
      const newState = [...prev];
      newState.push(Date.now() - t0);
      return newState;
    });
    setState((prev) => prev + 1);
  }, [history, isClick, isFirst, setPage, setRootHistory, state, t0]);

  const getClassName = useCallback(() => {
    const baseClassName = 'start';

    if (isFirst) {
      return baseClassName;
    }

    if (isClick) {
      return `${baseClassName} go`;
    }

    return `${baseClassName} wait`;
  }, [isClick, isFirst]);

  const renderText = useCallback(() => {
    const genText = () => {
      let h1Text = '클릭';
      let pText = '클릭해주세요';

      if (isFirst) {
        h1Text = '시작';
        return { h1Text, pText };
      }

      if (!isClick) {
        h1Text = '준비';
        pText = '초록색이 되면 클릭해주세요';
        return { h1Text, pText };
      }

      return { h1Text, pText };
    };

    const { h1Text, pText } = genText();

    return (
      <>
        <h1>{h1Text}</h1>
        <p>{pText}</p>
      </>
    );
  }, [isClick, isFirst]);

  useEffect(() => {
    const sto = setTimeout(() => {
      setIsClick(true);
    }, 1000 + (Math.random() - 0.5) * 500);

    if (isClick) {
      setT0(Date.now());
    }

    return () => {
      clearTimeout(sto);
    };
  }, [isClick, state]);

  return (
    <>
      <div className="label">{state}/5</div>
      <progress id="progress" max="5" value={state} />

      <div className={getClassName()} aria-hidden onClick={process}>
        {renderText()}
      </div>

      <div className="history">
        <div className="list">
          {history.map((value, idx) => {
            const key = value + idx;
            return (
              <div className="item" key={key}>
                {idx + 1}번째 시도: {value}ms
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Start;
