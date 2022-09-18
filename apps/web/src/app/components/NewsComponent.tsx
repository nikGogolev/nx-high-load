import { News } from '../types';
import styles from './NewsComponent.module.scss';
import { Link } from 'react-router-dom';

export interface NewsProps {
  news: News[];
}

function NewsComponent(props: NewsProps) {
  return (
    <div>
      <Link to="/add">Предложить новость</Link>
      {props.news.map((news_item) => {
        return (
          <div key={news_item.id} className={styles['news-container']}>
            <h3 className={styles['news-header']}>{news_item.title}</h3>
            {news_item.attachments?.length > 0 ? (
              <img
                className={styles['news-image']}
                src={news_item.attachments[0]}
                alt="img"
              ></img>
            ) : (
              <p></p>
            )}
            <p>{news_item.description}</p>
            <p>Author: {news_item.author}</p>
            <p>Date: {new Date(news_item.date).toLocaleString()}</p>
            <Link to={`${news_item.id}`}>Подробнее</Link>
          </div>
        );
      })}
    </div>
  );
}

export default NewsComponent;
