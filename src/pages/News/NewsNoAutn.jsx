import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NewsCard } from '../../components/cards/newsCard/NewsCard';
import { Footer } from '../../components/footer/Footer';
import { fetchPosts } from '../../redux/slices/posts';
import { Navigation } from '../../components/nav/Navigation';

const NewsNoAuth = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <Navigation />
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
          />
        )
      )}
      <Footer />
    </div>
  );
};

export default NewsNoAuth;
