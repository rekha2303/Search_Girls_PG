import React, {lazy, Suspense} from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import RoomDetails from '../components/roomDetails/roomDetails';
import Cart from '../components/roomDetails/cart';

//import AboutUs from '../components/landing/aboutUs'
//import Landing from '../components/landing/index';
const Landing = lazy (() => import ('../components/landing/index'));
const AboutUs = lazy (() => import ('../components/landing/aboutUs'));
const ContactUs = lazy (() => import ('../components/landing/contactUs'));
const Footer = lazy (() => import ('../components/footer/index'));

const router = createBrowserRouter ([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: 'RoomDetails',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RoomDetails />
          </Suspense>
        ),
      },
      {
        path: 'Cart',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: 'ContactUs',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: 'Footer',
        element: <Footer />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
