import React, { useCallback, useState } from 'react';
import './App.scss';
import Main from './component/Main';
import Start from './component/Start';
import Result from './component/Result';
import { Page } from './types';

function App() {
  const [page, setPage] = useState<Page>('main');
  const [history, setHistory] = useState<number[]>([]);

  const renderPage = useCallback(
    (curPage: Page) => {
      switch (curPage) {
        case 'main':
          return <Main setPage={setPage} />;
        case 'start':
          return <Start setPage={setPage} setRootHistory={setHistory} />;
        case 'result':
          return <Result setPage={setPage} history={history} />;
        default:
          return 'no';
      }
    },
    [history]
  );

  return <div className="App">{renderPage(page)}</div>;
}

export default App;
