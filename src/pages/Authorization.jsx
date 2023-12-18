import { Login } from '../components/unregistered users/login/Login';
import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/nav/Navigation';

const Authorization = () => {
  return (
    <div>
      <Navigation />
      <Login />
      <Footer />
    </div>
  );
};

export default Authorization;
