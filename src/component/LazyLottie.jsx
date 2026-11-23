import { lazy, Suspense, useEffect, useRef, useState } from "react";

// lottie-react (~250KB) is split into its own chunk and only fetched when needed.
const Lottie = lazy(() => import("lottie-react"));

/**
 * Renders a Lottie animation only once its container approaches the viewport.
 * Both the player and the animation JSON are code-split, and the box reserves
 * its final size via `aspectRatio`, so nothing shifts when it pops in.
 *
 * @param {() => Promise<{default: object}>} load  e.g. () => import("../assets/contact-form.json")
 * @param {string} aspectRatio  CSS aspect-ratio of the animation (w / h)
 */
const LazyLottie = ({ load, aspectRatio = "1 / 1", className = "", label }) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        load().then((mod) => {
          if (!cancelled) setData(mod.default);
        });
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [load]);

  return (
    <div
      ref={ref}
      className={`relative w-full ${className}`}
      style={{ aspectRatio }}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {data ? (
        <Suspense fallback={<LottieSkeleton />}>
          <Lottie
            animationData={data}
            loop
            className="absolute inset-0 h-full w-full animate-[lottie-in_0.6s_ease-out]"
            rendererSettings={{ preserveAspectRatio: "xMidYMid meet", progressiveLoad: true }}
          />
        </Suspense>
      ) : (
        <LottieSkeleton />
      )}
    </div>
  );
};

const LottieSkeleton = () => (
  <div className="absolute inset-0 grid place-items-center">
    <div className="h-2/5 w-2/5 rounded-full bg-gradient-to-tr from-[#FF7E29]/10 to-[#FF3E6C]/10 blur-2xl" />
  </div>
);

export default LazyLottie;
