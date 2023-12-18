import { UserCard } from '../components/registered users/user/card/UserCard';
import { SideBar } from '../components/registered users/sidebar/SideBar';
import { Navigation } from '../components/nav/Navigation';

const User = () => {
  return (
    <div>
      <div className='container'>
        <Navigation />
        <div className='sidenav'>
          <SideBar />
        </div>
        <div className='main'>
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default User;
