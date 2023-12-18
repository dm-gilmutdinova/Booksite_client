import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/nav/Navigation';
import './pageNotFound-module.css';

const PageNotFound = () => {
  return (
    <div>
      <Navigation />
      <div className='pagenotfound'>
        <h1 className='pagenotfound__title'>
          Sorry... This page is under construction{' '}
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
