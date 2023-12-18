import { AboutMain } from '../components/unregistered users/main/aboutMain';
import { CardMain } from '../components/unregistered users/main/cardMain';
import { HeaderMain } from '../components/unregistered users/main/headerMain';
import { Navigation } from '../components/nav/Navigation';
import { Footer } from '../components/footer/Footer';

const Main = () => {
  return (
    <main>
      <Navigation />
      <HeaderMain />
      <AboutMain />
      <CardMain />
      <Footer />
    </main>
  );
};

export default Main;
