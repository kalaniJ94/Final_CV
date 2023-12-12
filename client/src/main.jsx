import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import GalaxyMap from './components/pages/GalaxyMap.jsx';
import VoyagePage from './components/pages/VoyagePage.jsx';
import BasicVoyage from './components/pages/BasicVoyage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/galaxyMap',
        element: <GalaxyMap />,
        
      },
      {
        path: '/voyages',
        element: <VoyagePage/>
      },
      {
        path: '/basicVoyage',
        element: <BasicVoyage/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);