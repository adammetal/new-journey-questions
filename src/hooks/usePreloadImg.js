import { useState, useEffect } from "react";

function usePreloadImg(src) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      return;
    }

    if (typeof src !== 'string') {
      return;
    }

    const img = document.createElement("img");
    img.src = src;

    const handleLoad = () => {
      setLoading(false);
    };

    img.addEventListener("load", handleLoad);

    // cleanup function
    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return loading;
}

export default usePreloadImg;