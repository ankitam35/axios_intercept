import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import api from './api';

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(res => setDataList(res.data));
  }, []);

  return (
    <Container>
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
