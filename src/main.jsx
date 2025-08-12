import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout';
import ChatOrbit from './page/ChatOrbit';
import Gardeniahub from './page/Gardeniahub';
import CourseManagement from './page/CourseManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: '/chatorbit',
    element: <ChatOrbit></ChatOrbit>
  },
  {
    path: '/gardeniahub',
    element: <Gardeniahub></Gardeniahub>
  },
  {
    path: '/course-management',
    element: <CourseManagement></CourseManagement>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
