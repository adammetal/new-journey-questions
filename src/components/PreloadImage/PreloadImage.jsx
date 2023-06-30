import usePreloadImg from "../../hooks/usePreloadImg";

import "./PreloadImage.css";

function PreloadImage({ src, alt }) {
  const loading = usePreloadImg(src);

  return loading ? (
    <div className="placeholder" />
  ) : (
    <img src={src} alt={alt} />
  );
}

export default PreloadImage;
