import './App.css';
import Birds from './components/Birds'

function App({viewBirdArray}) {

  console.log("App.js", viewBirdArray)
  return (
    <div className="App">
       <p className="header">(Numbers in data set represent individual species sightings)</p>
       <h1 className="title">Calculate Species Sightings</h1>
       <Birds />
       <footer className="footer">Inception: <a href="https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true">HackerRank Migratory-Birds</a></footer>
    </div>
  );
}

export default App;
