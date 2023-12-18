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
          <a href=''>Bookshelf</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href=''>Reading</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href=''>Bookstore</a>
        </li>
        <li className='sidebar_nav-list'>
          <a href=''>Trends</a>
        </li>
      </ul>
    </div>
  );
};
