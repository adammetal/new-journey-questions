import RandomCatImage from "./components/RandomCatImage"
import RandomQ from "./components/RandomQ";

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