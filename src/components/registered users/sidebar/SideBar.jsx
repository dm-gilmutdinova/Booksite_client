import './sidebar-module.css';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar_nav'>
        <li className='sidebar_nav-list'>
          <a href='/home'>News</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href='/addpost'>Add post</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href='/user'>Bookshelf</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href='/user'>Reading</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href='/user'>Bookstore</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href='/home'>Trends</a>
        </li>
      </ul>
    </div>
  );
};
