import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchAuth, selectIsAuth } from '../../../redux/slices/auth';

import { ReactComponent as TwiIcon } from './../../../img/login/twi.svg';
import { ReactComponent as GoogleIcon } from './../../../img/login/google.svg';
import { ReactComponent as FacebookIcon } from './../../../img/login/facebook.svg';
import { ReactComponent as PinterestIcon } from './../../../img/login/pinterest.svg';
import { ReactComponent as BtntIcon } from './../../../img/login/btn.svg';

import './login-module.css';

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert('failed to login');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to='/home' />;
  }

  return (
    <div className='container'>
      <div className='login'>
        <div className='login__card'>
          <div className='login__card-title'>You’re Bookmarks</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='login__card-input'>
              <div>
                <input
                  type='email'
                  placeholder='email'
                  {...register('email', {
                    required: 'Enter your email!',
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter valid email!',
                    },
                  })}
                />
                {errors?.email && (
                  <div className='error'>{errors.email.message}</div>
                )}
              </div>
              <div>
                <input
                  type='password'
                  placeholder='password'
                  {...register('password', { required: 'Enter your password' })}
                />
                {errors?.password && (
                  <div className='error'>{errors.password.message}</div>
                )}
              </div>

              <ul className='login__card-social'>
                <li>
                  <a
                    href='http://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TwiIcon />
                  </a>
                </li>
                <li>
                  <a
                    href='https://google.ru'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GoogleIcon />
                  </a>
                </li>
                <li>
                  <a
                    href='https://facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href='https://pinterest.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <PinterestIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className='login__button'>
              <button type='submit' className='login__button-btn'>
                <BtntIcon className='login__btn-icon' />
              </button>
            </div>
          </form>
          <div className='login__button'>
            <a href='/sign'>
              <button className='btn__registration'>Create bookmarks</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
