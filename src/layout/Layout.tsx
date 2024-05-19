import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Logo from '../components/Logo/Logo';

export default function Layout() {
  return (
    <div>
      <Logo />
      <Outlet />
      <Footer />
    </div>
  );
}
