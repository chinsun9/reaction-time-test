import React, { useCallback } from 'react';
import { Page } from '../types';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
};

function Main({ setPage }: Props) {
  const onClickHandler = useCallback(() => {
    setPage('start');
  }, [setPage]);

  return (
    <>
      <h1>반응속도 테스트</h1>

      <hr />
      <div className="notice">
        <h2>유의사항</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          voluptates cum unde consequatur assumenda cupiditate incidunt dolore
          enim, nostrum deleniti id recusandae dignissimos delectus pariatur
          blanditiis dolorum adipisci necessitatibus. Natus!
        </p>
      </div>
      <button type="button" onClick={onClickHandler}>
        테스트 시작
      </button>
    </>
  );
}

export default Main;
