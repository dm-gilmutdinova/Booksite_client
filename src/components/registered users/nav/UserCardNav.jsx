import { ReactComponent as Line } from '../../../../img/user/Line.svg';

import './userCardNav-module.css';

export const UserCardNav = () => {
  return (
    <div className='container'>
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
  );
};
