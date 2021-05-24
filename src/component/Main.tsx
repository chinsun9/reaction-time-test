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

      <button type="button" onClick={onClickHandler}>
        테스트 시작
      </button>
    </>
  );
}

export default Main;
