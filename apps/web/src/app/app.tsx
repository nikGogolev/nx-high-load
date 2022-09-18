// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { News } from './types';
import NewsComponent from './components/NewsComponent';
import SingleNewsComponent from './components/SingleNewsComponent';
import AddNewsComponent from './components/AddNewsComponent';

export function App() {
  const [news, setNews] = useState(new Array<News>());

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3333/api/news');

        const data = await response.json();
        console.log(data);

        setNews(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    })();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Main page</h1>
            <Link to="/news">To news</Link>
          </>
        }
      ></Route>
      <Route path="/news" element={<NewsComponent news={news} />}></Route>
      <Route path="/news/:id" element={<SingleNewsComponent />} />
      <Route path="/add" element={<AddNewsComponent />} />
    </Routes>
  );
}

export default App;
