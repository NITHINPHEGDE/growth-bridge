import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const CaseStudies = lazy(() => import('./pages/CaseStudies/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0d1b3e]">
    <div className="w-8 h-8 border-2 border-[#2d7a3a] border-t-[#4cba5e] rounded-full animate-spin" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Suspense fallback={<Fallback />}><Home /></Suspense> },
      { path: 'about', element: <Suspense fallback={<Fallback />}><About /></Suspense> },
      { path: 'services', element: <Suspense fallback={<Fallback />}><Services /></Suspense> },
      { path: 'case-studies', element: <Suspense fallback={<Fallback />}><CaseStudies /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<Fallback />}><Contact /></Suspense> },
      { path: '*', element: <Suspense fallback={<Fallback />}><NotFound /></Suspense> },
    ],
  },
]);