import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import AppWrapper from './appWraper/AppWrapper';
import Root from './appWraper/Root';

// Secondary page: split into its own chunk so it never weighs on the home page.
const CourseManagement = lazy(() => import('./page/CourseManagement'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper></AppWrapper>,
  },
  {
    path: '/course-management',
    element: (
      <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]" />}>
        <CourseManagement></CourseManagement>
      </Suspense>
    ),
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root router={router} />
  </StrictMode>
)
