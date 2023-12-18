import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { fetchRegister, selectIsAuth } from '../../../redux/slices/auth';
import { ReactComponent as BtntIcon } from './../../../img/login/btn.svg';
import './signCard-module.css';

export const SignCard = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values));
      if (!data.payload) {
        return alert('failed to register');
      }
      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isAuth) {
    return <Navigate to='/home' />;
  }

  return (
    <div className='container'>
      <div className='sign'>
        <div className='sign__card'>
          <div className='sign__card-title'>Welcome!</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='sign__card-input'>
              <div>
                <input
                  type='text'
                  placeholder='username'
                  {...register('username', {
                    required: 'Enter your username!',
                    minLength: {
                      value: 6,
                      message: 'Username must be at least 6 characters',
                    },
                  })}
                />
                {errors?.username && (
                  <div className='error'>{errors.username.message}</div>
                )}
              </div>
              <div>
                <input
                  type='email'
                  placeholder='e-mail'
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
                  {...register('password', {
                    required: 'Enter your password',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                {errors?.password && (
                  <div className='error'>{errors.password.message}</div>
                )}
              </div>
            </div>
            <div className='sign__button'>
              <button type='submit' className='sign__button-btn'>
                <BtntIcon className='sign__btn-icon' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
