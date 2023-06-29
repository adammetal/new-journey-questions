import RandomCatImage from "./RandomCatImage";
import RandomQ from "./RandomQ";

function Home() {
  return (
    <div className="home">
      <RandomQ />
      <div className="rest">
        <RandomCatImage />
      </div>
    </div>
  )
}

export default Home;