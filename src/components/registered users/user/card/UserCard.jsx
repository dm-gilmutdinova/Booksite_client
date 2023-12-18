import { ReactComponent as EditpenIcon } from '../../../../img/user/editPen.svg';
import { ReactComponent as BookmarkIcon } from '../../../../img/card/bookmark.svg';
import { ReactComponent as Line } from '../../../../img/user/Line.svg';

import './userCard-module.css';

export const UserCard = () => {
  return (
    <div className='container'>
      <div className='usercard'>
        <div className='usercard__profile'>
          <div className='usercard__profile-top'>
            <div className='usercard__profile-top-top'>
              <div className='usercard__profile-img'></div>
              <div className='usercard__profile-name'>
                <div className='usercard__profile-username'>name</div>
                <div className='usercard__profile-idname'>@id_name</div>
              </div>
            </div>
            <div className='usercard__profile-add'>
              <a href='/' className='usercard__profile-edit'>
                <EditpenIcon />
              </a>
              <button className='usercard__profile-follow'>
                <BookmarkIcon />
              </button>
            </div>
          </div>
          <div className='usercard__profile-bottom'>
            <div className='usercard__profile-bottom-about'>
              <div className='usercard__profile-bottom-about usercard__profile-bottom-title'>
                about me:
              </div>
              <div className='usercard__profile-bottom-about usercard__profile-bottom-text'>
                Hello! My name is [Name], and I am an avid book lover. I believe
                that books are not just paper pages, but magical portals to
                other worlds that allow us to immerse ourselves in exciting
                adventures, broaden our horizons, and find inspiration.
                <br /> <br />
                On this website, I am happy to share my reviews of the books I
                have read. Here you will find my thoughts, emotions, and
                recommendations on various literary works. I strive to be
                objective and honest in my reviews to help other reading
                enthusiasts choose their next book for their "What to Read
                Next?" list.
                <br /> <br />I am passionate about various genres - from classic
                literature to science fiction, from detective stories to
                philosophy. In my profile, you will find reviews of books that
                impressed me with their deep plot, vibrant characters, and
                unique atmosphere.
                <br /> <br />I am also always open to new authors and books, so
                I would be delighted to receive recommendations from other
                users. If you have favorite books that you would like me to read
                and review, please share them with me!
                <br /> <br />
                Let's dive into the world of words, art, and imagination
                together. Read my reviews, share your thoughts, and get inspired
                by new book discoveries!
              </div>
            </div>
            <div className='usercard__profile-bottom-location'>
              <div className='usercard__profile-location-title usercard__profile-bottom-title'>
                Location:
              </div>
              <div className='usercard__profile-location-text usercard__profile-bottom-text'>
                Seattle Washington, usa
              </div>
            </div>
            <div className='usercard__profile-bottom-born'>
              <div className='usercard__profile-bottom-born usercard__profile-bottom-title'>
                Born:
              </div>
              <div className='usercard__profile-bottom-born usercard__profile-bottom-text'>
                01/01/2000
              </div>
            </div>
            <div className='usercard__profile-bottom-bookworms'>
              <span className='usercard__accent'>100</span> bookworms
            </div>
            <div className='usercard__profile-bottom-bookmark'>
              <span className='usercard__accent'>100</span> bookmark
            </div>
          </div>
          <div className='usercard__navigation'>
            <ul className='usercard__navigation-list'>
              <li>
                <a
                  href='/'
                  className='usercard__navigation-listline usercard__navigation-accent'
                >
                  Reviews
                </a>
                <Line className='usercard__line' />
              </li>
              <li>
                <a href='/' className='usercard__navigation-listline'>
                  Shelf
                </a>
              </li>
              <li>
                <a href='/' className='usercard__navigation-listline'>
                  Marks
                </a>
              </li>
              <li>
                <a href='/' className='usercard__navigation-listline'>
                  Ribbon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
