import './footer-module.css';

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer'>
          <a href='/' className='footer__logo'>
            Bookmarks
          </a>
          <ul className='footer__list'>
            <li>
              <a href='/'>About Bookmarks</a>
            </li>
            <li>
              <a href='/'>Help</a>
            </li>
            <li>
              <a href='/'>Terms</a>
            </li>
            <li>
              <a href='/'>Developers</a>
            </li>
            <li>
              <a href='/'>Contact us</a>
            </li>
          </ul>
          <a href='mailto:dm.gilmutdinova@gmail.com' className='footer__mail'>
            dm.gilmutdinova@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
