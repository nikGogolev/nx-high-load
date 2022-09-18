import { News } from '../types';
import styles from './SingleNewsComponent.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SingleNewsComponent() {
  const [news, setNews] = useState({} as News);

  const routeParams = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/api/news/${routeParams['id']}`
        );
        const data = await response.json();
        setNews(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    })();
  }, [routeParams]);

  return (
    <div className={styles['news-container']}>
      <h3 className={styles['news-header']}>{news.title}</h3>
      {news.attachments?.length > 0 ? (
        <img
          className={styles['news-image']}
          src={news.attachments[0]}
          alt="img"
        ></img>
      ) : (
        <p></p>
      )}
      <p>{news.description}</p>
      <p>Author: {news.author}</p>
      <p>Date: {new Date(news.date).toLocaleString()}</p>
      <Link to="/news">Назад</Link>
    </div>
  );
}

export default SingleNewsComponent;
