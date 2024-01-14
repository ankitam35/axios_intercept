import { Suspense, lazy, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./App.scss"
import api from './api';
import Lazy from './tabOnDemand/Tab';

const LazyLoadedComponent = lazy(() => import('./components/LazyLoadedComponent'));

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(res => setDataList(res.data));
  }, []);

  return (
    <Container>
      <Lazy />
      <hr />
      <Suspense fallback={<div>Loading lazy...</div>}>
        <LazyLoadedComponent />
      </Suspense>
      <hr />
      <h1 className="text-center">Axios with ReactJs</h1>
      <ol>
        {dataList && dataList.map((val, index) => {
          return (
            <li key={index}>{val.title}</li>
          );
        })}
      </ol>
    </Container>
  );
}

export default App;
