import { useEffect } from 'react';
import { RouterProvider } from 'react-router';

/**
 * The preloader is plain HTML/CSS in index.html, so it paints on the first frame.
 * Once React has committed the page (and the web font is ready, capped so a slow
 * font never holds the page hostage) it fades out. No artificial minimum delay.
 */
const dismissPreloader = () => {
  const el = document.getElementById('preloader');
  if (!el || el.dataset.state === 'done') return;
  el.dataset.state = 'done';
  el.classList.add('is-done');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
  setTimeout(() => el.remove(), 800); // fallback if transitionend never fires
};

const Root = ({ router }) => {
  useEffect(() => {
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const cap = new Promise((resolve) => setTimeout(resolve, 900));
    Promise.race([fontsReady, cap]).then(() => requestAnimationFrame(dismissPreloader));
  }, []);

  return <RouterProvider router={router} />;
};

export default Root;
