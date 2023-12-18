import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SideBar } from '../../components/registered users/sidebar/SideBar';
import { NewsCard } from '../../components/cards/newsCard';
import { fetchPosts } from '../../redux/slices/posts';
import { Navigation } from '../../components/nav/Navigation';

import './home-module.css';

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className='container'>
      <Navigation />
      <div className='sidenav'>
        <SideBar />
      </div>
      <div className='main'>
        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
          isPostsLoading ? (
            <NewsCard key={index} isLoading={true} />
          ) : (
            <NewsCard
              key={obj._id}
              _id={obj._id}
              book={obj.book}
              user={obj.user}
              title={obj.title}
              text={obj.text}
              viewCount={obj.viewCount}
              createdAt={obj.createdAt}
              isEditable={userData?._id === obj.user._id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
