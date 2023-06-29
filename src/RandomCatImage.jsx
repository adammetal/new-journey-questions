import { useState, useEffect } from "react";
import "./RandomCatImage.css";

const fetchRandomKittenAsync = async () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  const response = await fetch(url);
  const kittens = await response.json();
  return kittens[0].url;
};

const preloadImage = (src) => new Promise((resolve) => {
  const img = document.createElement('img');
  img.src = src;

  img.onload = () => {
    resolve();
  }
});

/*class RandomCatImage extends Component {
  constructor() {
    // run the base class constructor
    super();

    this.state = {
      url: "https://cdn2.thecatapi.com/images/2OKotXbFe.jpg"
    }
  }

  // react will run this automatically when the component is rendered first.
  componentDidMount() {
    fetchRandomKitten().then(url => {
      this.setState({ url });
    });
  }

  render() {
    return (
      <div className="random-cat-image">
        <h1>Random cat</h1>
        <img src={this.state.url} alt="random cat" />
      </div>
    )
  }
}*/

/*
[
    {
      "id": "2OKotXbFe",
      "url": "https://cdn2.thecatapi.com/images/2OKotXbFe.jpg",
      "width": 1080,
      "height": 1350
    }
  ]
*/

function RandomCatImage() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isValid = true;

    fetchRandomKittenAsync().then((cat) => {
      if (!isValid) {
        return;
      }

      setCat(cat);
    });

    return () => {
      isValid = false;
    }
  }, []);

  useEffect(() => {
    if (cat === null) {
      return;
    }

    const img = document.createElement('img');
    img.src = cat;

    const handleLoad = () => {
      setLoading(false);
    }

    img.addEventListener('load', handleLoad);

    // cleanup function
    return () => {
      img.removeEventListener('load', handleLoad);
    }
  }, [cat]);

  return (
    <div className="random-cat-image">
      <h1>Random cat</h1>
      {loading ? (
        <div className="placeholder" />
      ) : (
        <img src={cat} alt="random cat" />
      )}
    </div>
  );
}

export default RandomCatImage;
