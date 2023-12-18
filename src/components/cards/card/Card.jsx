import { ReactComponent as BookmarkIcon } from './../../../img/card/bookmark.svg';
import { ReactComponent as BookshelfIcon } from './../../../img/card/bookshelf.svg';

import './card-module.css';

export const Card = ({ name, id_name, about }) => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card__head'>
          <div className='card__us'>
            <div className='card__img'></div>
            <div className='card__user'>
              <div className='card__user-name'>{name}</div>
              <div className='card__user-id'>{id_name}</div>
            </div>
          </div>
          <div className='card__follow'>
            <BookmarkIcon />
          </div>
        </div>
        <div className='card__head-title'>
          <div className='card__head-about'>
            {about}
            {/* Hello! My name is [Name], and I am an avid book lover. I believe
            that books are not just paper pages, but magical portals to other
            worlds that allow us to immerse ourselves in exciting adventures,
            broaden our horizons, and find inspiration.
            <br />
            <br />
            On this website, I am happy to share my reviews of the books I have
            read. Here you will find my thoughts, emotions, and recommendations
            on various literary works. I strive to be objective and honest in my
            reviews to help other reading enthusiasts choose their next book for
            their "What to Read Next?" list.
            <br />
            <br />
            I am passionate about various genres - from classic literature to
            science fiction, from detective stories to philosophy. In my
            profile, you will find reviews of books that impressed me with their
            deep plot, vibrant characters, and unique atmosphere.
            <br />
            <br />
            I am also always open to new authors and books, so I would be
            delighted to receive recommendations from other users. If you have
            favorite books that you would like me to read and review, please
            share them with me!
            <br />
            <br />
            Let's dive into the world of words, art, and imagination together.
            Read my reviews, share your thoughts, and get inspired by new book
            discoveries! */}
          </div>
          <div className='card__head-shelf'>
            <div className='card__title-shelf'>Shelf</div>
            <ul className='shelf'>
              <li className='shelf__book'>
                <BookshelfIcon />
                Name
              </li>
              <li className='shelf__book'>
                <BookshelfIcon />
                Name
              </li>
              <li className='shelf__book'>
                <BookshelfIcon />
                Name
              </li>
              <li className='shelf__book'>
                <BookshelfIcon />
                Name
              </li>
              <li className='shelf__book'>
                <BookshelfIcon />
                Name
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
