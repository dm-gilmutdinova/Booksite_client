import { Card } from '../../../cards/card';
import { cards } from './../../../../helpers/cardList';
import './cardMain-module.css';

export const CardMain = () => {
  return (
    <div className='container'>
      <div className='cards'>
        <div className='cards__title'>Create your own unique card</div>
        <div className='cards__user'>
          {cards.map((c) => {
            return (
              <div className='cards__user-us'>
                <Card name={c.name} id_name={c.ID_name} about={c.about} />
              </div>
            );
          })}
        </div>
        <div className='cards__subtitle'>
          So what are you waiting for?
          <br />
          Join Bookmarks today and start your journey into the world of books!
        </div>
        <a href='/login' className='cards__btn'>
          Make Bookmarks
        </a>
      </div>
    </div>
  );
};
