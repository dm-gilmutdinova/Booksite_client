import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import { ReactComponent as BookmarksLogo } from '../../img/logo.svg';
import './navigation-module.css';
import './navUser-module.css';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Are you sure want to log?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className='container'>
      <>
        {isAuth ? (
          <nav className='register__nav'>
            <a href='/home' className='logo'>
              <BookmarksLogo />
            </a>
            <div className='register__nav-btn'>
              <a href='/user' className='nav__login'>
                User
              </a>
              <button onClick={onClickLogout}>Exit</button>
            </div>
          </nav>
        ) : (
          <nav>
            <a href='/' className='logo'>
              <BookmarksLogo />
            </a>
            <ul className='list'>
              <li>
                <a href='/newsnoauth'>News</a>
              </li>
              <li>
                <a href='/bookshelf'>Bookshelf</a>
              </li>
              <li>
                <a href='/trends'>Trends</a>
              </li>
              <li>
                <a href='/search'>Search</a>
              </li>
            </ul>
            <a href='/login' className='nav__login'>
              Log In
            </a>
          </nav>
        )}
      </>
    </div>
  );
};
