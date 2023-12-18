import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser, selectIsAuth } from './redux/slices/auth';
import Authorization from './pages/Authorization';
import Main from './pages/Main';
import Sign from './pages/Sign';
import NewsNoAuth from './pages/News/NewsNoAutn';
import PageNotFound from './helpers/pagenotfound/PageNotFound';
import Home from './pages/home/Home';
import User from './pages/User';
import { AddPost } from './pages/AddPost/AddPost';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthUser());
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Authorization />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/newsnoauth' element={<NewsNoAuth />} />
          <Route path='/bookshelf' element={<PageNotFound />} />
          <Route path='/trends' element={<PageNotFound />} />
          <Route path='/search' element={<PageNotFound />} />
          <Route path='/home' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/addpost' element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
