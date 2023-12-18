import './headerMain-module.css';

export const HeaderMain = () => {
  return (
    <div className='container'>
      <header>
        <div className='header__title'>
          Books <br /> review
        </div>
        <div className='header__subtitle'>
          Our website offers you. a unique platform for exchanging opinions
          about books. Here you will find thousands of reviews from our readers
          who share their impressions, ratings, and recommendations about the
          best works of world literature. Stay up to date with the latest
          releases, get inspired for new readings, and join discussions with
          other book lovers.
          <div className='header__subtitle-accent'>
            Our website is your reliable guide in the world of literature!
          </div>
        </div>
      </header>
    </div>
  );
};
