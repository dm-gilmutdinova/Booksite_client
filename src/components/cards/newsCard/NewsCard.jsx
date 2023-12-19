import { useDispatch } from 'react-redux';
import { UserInfo } from '../../registered users/user/info/UserInfo';
import { fetchRemovePost } from '../../../redux/slices/posts';
import { ReactComponent as CommentsIcon } from './../../../img/news/comments.svg';
import { ReactComponent as LikeIcon } from './../../../img/news/like.svg';
import { ReactComponent as RepostIcon } from './../../../img/news/repost.svg';
import { ReactComponent as ViewsIcon } from './../../../img/news/views.svg';
import { ReactComponent as EditIcon } from '../../../img/card/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../img/card/delete.svg';

import './newsCard-module.css';

export const NewsCard = ({
  _id,
  title,
  text,
  book,
  viewCount,
  user,
  createdAt,
  isEditable,
}) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm('Are you sure want to delete?')) {
      dispatch(fetchRemovePost(_id));
    }
  };

  return (
    <div className='newsCard'>
      <div className='newsCard__name'>
        <div className='newsCard__name-img'></div>
        <div className='newsCard__name-about'>
          <div>
            <span className='newsCard__name-name'>
              <UserInfo {...user} />
            </span>
            <span className='newsCard__name-surname'>
              @<UserInfo {...user} />
            </span>
          </div>
          <div className='newsCard__name-data'>{createdAt}</div>
        </div>
        <div className='newsCard__name-author'>{book}</div>
      </div>
      <div className='newsCard__text'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className='newsCard__reaction'>
        <span>
          <CommentsIcon /> ?
        </span>
        <span>
          <LikeIcon /> ?
        </span>
        <span>
          <RepostIcon /> ?
        </span>
        <span>
          <ViewsIcon /> {viewCount}
        </span>
        {isEditable ? (
          <span className='editbtn'>
            <span>
              <button>
                <EditIcon style={{ width: 25, height: 25 }} />
              </button>
            </span>
            <span>
              <button onClick={onClickRemove}>
                <DeleteIcon style={{ width: 25, height: 25 }} />
              </button>
            </span>
          </span>
        ) : (
          <span>...</span>
        )}
      </div>
    </div>
  );
};
