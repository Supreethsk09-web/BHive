import './App.css';
import Banner from './components/Banner';
import Choose from './components/Choose';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';
import Overview from './components/Overview';

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Choose />
      <Overview />
      <Download />
      <Footer />
    </>
  );
}

export default App;
