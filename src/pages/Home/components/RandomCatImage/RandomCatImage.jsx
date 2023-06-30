import useGet from "../../../../hooks/useGet";
import PreloadImage from "../../../../components/PreloadImage";
import "./RandomCatImage.css";

const CAT_URL = "https://api.thecatapi.com/v1/images/search";

function RandomCatImage() {
  const {data, loading} = useGet(CAT_URL, (res) => res[0].url);

  return (
    <div className="random-cat-image">
      <h1>Random cat</h1>
      {loading ? (
        <div className="loader" />
      ) : (
        <PreloadImage src={data} alt="Random cat" />
      )}
    </div>
  );
}

export default RandomCatImage;
