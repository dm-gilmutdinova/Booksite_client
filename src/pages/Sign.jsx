import { Footer } from '../components/footer/Footer';
import { Navigation } from '../components/nav/Navigation';
import { SignCard } from '../components/unregistered users/sign/SignCard';

const Sign = () => {
  return (
    <div>
      <Navigation />
      <SignCard />
      <Footer />
    </div>
  );
};

export default Sign;
