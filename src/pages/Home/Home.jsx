import RandomCatImage from "./components/RandomCatImage"
import RandomQ from "./components/RandomQ";

function Home({ questions }) {
  return (
    <div className="home">
      <RandomQ questions={questions} />
      <div className="rest">
        <RandomCatImage />
      </div>
    </div>
  )
}

export default Home;