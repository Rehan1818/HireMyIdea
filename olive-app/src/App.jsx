import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhoneMockup from './components/PhoneMockup';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <PhoneMockup />
      </main>
    </div>
  );
}