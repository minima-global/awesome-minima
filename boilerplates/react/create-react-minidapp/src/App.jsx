import minimaLogo from './minima_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="container">
        <img src={minimaLogo} className="logo" alt="logo" />
        <p>
          Nice one, you have installed your first MiniDapp! <br/><br/>
          Next up, try the <a href="https://docs.minima.global/docs/buildonminima/dapptutorial/reactminidapp/#balance-tutorial" target="_blank">Balance Tutorial</a> or edit the <code>src/App.jsx</code> file to get started.
        </p>
      </section>
    </div>
  );
}

export default App;
