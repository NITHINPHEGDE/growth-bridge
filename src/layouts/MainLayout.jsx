import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7f4]">
      <Navbar />
      <main className="flex-grow">
      <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
