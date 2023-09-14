import './App.css';
import Birds from './components/Birds'
import FreqDisplay from './components/FreqDisplay';

function App({viewBirdArray}) {

  console.log("App.js", viewBirdArray)
  return (
    <div className="App">
       <p className="header">Enter a comma separated list into input box. Click Add to see new results.</p>
       <h1 className="title">Calculate Species Sightings</h1>
       <Birds />
       <footer className="footer">Project Inception: <a href="https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true">HackerRank Migratory-Birds Problem</a></footer>
    </div>
  );
}

export default App;
