import styles from './AddNewsComponent.module.scss';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export function NewsComponent() {
  const [title, setTitle] = useState('');
  const handleTitle = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement) {
      setTitle(e.target.value);
    }
  };

  const [description, setDescription] = useState('');
  const handleDescription = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLTextAreaElement) {
      setDescription(e.target.value);
    }
  };

  const [file, setFile] = useState({} as HTMLInputElement);
  const handleFile = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement) {
      setFile(e.target);
    }
  };

  const addNews = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formdata = new FormData();
    if (file.files) {
      formdata.append('file', file.files[0], file.files[0].name);
    }
    formdata.append('title', title);
    formdata.append('description', description);
    try {
      const requestOptions = {
        method: 'POST',
        body: formdata,
      };
      await fetch('http://localhost:3333/api/news', requestOptions);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }

    setTitle('');
    setDescription('');
    setFile({} as HTMLInputElement);
  };

  return (
    <>
      <form onSubmit={addNews} className={styles['add-form']}>
        <input type="text" name="title" value={title} onInput={handleTitle} />
        <textarea
          rows={7}
          name="description"
          value={description}
          onChange={handleDescription}
        />
        <input type="file" name="attachments" onInput={handleFile} />
        <input type="submit" />
      </form>
      <Link to="/news">Назад</Link>
    </>
  );
}

export default NewsComponent;
