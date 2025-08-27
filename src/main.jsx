import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ChatOrbit from './page/ChatOrbit';
import Gardeniahub from './page/Gardeniahub';
import CourseManagement from './page/CourseManagement';
import AppWrapper from './appWraper/AppWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper></AppWrapper>,
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
