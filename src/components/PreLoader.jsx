import { useState, useEffect } from "react"
import "./PreLoader.scss"; // file SCSS yang berisi semua kode CSS/SCSS Saturn + Titan

const PreLoader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tunggu 7 detik sebelum hilang
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish?.(); // kirim sinyal ke main.jsx kalau PreLoader selesai
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      {/* Masukkan HTML Saturn/Titan sesuai strukturmu */}
      <div className="scene">
        <div className="scene_titanShadow"></div>
        <div className="t_wrap">
          <div className="scene_titan">
            <div className="eyes">
              <div className="eye eye--left"></div>
              <div className="eye eye--right"></div>
            </div>
          </div>
        </div>
        <div className="scene_saturn">
          <div className="scene_saturn__face">
            <div className="face_clip">
              <div className="eye eye--left"></div>
              <div className="eye eye--right"></div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="scene_saturn__shadow"></div>
          <div className="scene_saturn__shadowRing"></div>
          <div className="scene_saturn__sparks">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="spark"></div>
            ))}
          </div>
          <div className="scene_saturn__ring">
            <div className="small">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="small_part"></div>
              ))}
            </div>
            {[...Array(3)].map((_, layer) => (
              <div key={layer} className="layer">
                {[...Array(50)].map((_, i) => (
                  <div key={i} className="layer_part"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
