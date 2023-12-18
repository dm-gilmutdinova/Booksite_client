import SimpleMDE from 'react-simplemde-editor';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { Navigation } from '../../components/nav/Navigation';
import { SideBar } from '../../components/registered users/sidebar/SideBar';
import { selectIsAuth } from '../../redux/slices/auth';
import './addPost-module.css';
import axios from '../../axios';

export const AddPost = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');

  const onChange = React.useCallback((text) => {
    setText(text);
  }, []);

  // const handleChangeFile = () => {};

  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to='/' />;
  }

  const onSubmit = async () => {
    try {
      // setLoading(true);
      const fields = {
        title,
        book,
        text,
      };
      const { data } = await axios.post('/posts', fields);
      const id = data._id;
      navigate('./posts/${id}');
    } catch (error) {
      console.warn(error);
      alert('error :(');
    }
  };

  return (
    <div className='container'>
      <Navigation />
      <div className='sidenav'>
        <SideBar />
      </div>
      <div className='main'>
        <div className='addPost'>
          <h1 className='addPost__title'>Add you're post!</h1>
          <form className='addPost__form'>
            <input
              type='text'
              placeholder='Book'
              className='addPost__form-input'
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
            <input
              type='text'
              placeholder='Title'
              className='addPost__form-input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <SimpleMDE
              className='addPost__form-input addPost__form-text'
              value={text}
              onChange={onChange}
            />
            {/* <textarea
              type='text'
              placeholder="You're text"
              className='addPost__form-input addPost__form-text'
              value={text}
              onChange={onChange}
            /> */}
            <div className='addPost__form-btn'>
              <button onClick={onSubmit} className='addPost__form-submit'>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
