import { useState, useEffect, useRef } from "react";
import "./PreLoader.css";

const PreLoader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    let loopCount = 0;

    const handleIteration = () => {
      loopCount++;
      if (loopCount === 2) {
        // setelah animasi kata berjalan 2x
        setFadeOut(true);
        setTimeout(() => {
          setShow(false);
          onFinish?.();
        }, 600); // tunggu 0.6 detik fade-out
      }
    };

    // FALLBACK: Jika animasi tidak trigger, hide PreLoader setelah 3 detik
    const fallbackTimer = setTimeout(() => {
      if (show) {
        setFadeOut(true);
        setTimeout(() => {
          setShow(false);
          onFinish?.();
        }, 600);
      }
    }, 3000);

    loader?.addEventListener("animationiteration", handleIteration);
    return () => {
      loader?.removeEventListener("animationiteration", handleIteration);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish, show]);

  // kalau sudah selesai loading → hapus komponen dari DOM
  if (!show) return null;

  return (
    <div className={`preloader-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words" ref={loaderRef}>
            <span className="word">website</span>
            <span className="word">portfolio</span>
            <span className="word">graphic</span>
            <span className="word">design</span>
            <span className="word">website</span>
            <span className="word">portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
