import './App.css';
import LdtCompA from './compoments/LdtCompA';

function App() {
  return (
    <div className="App">
        <h1>Lam Duc Tai K23CNT3</h1>
        <LdtCompA />
        <LdtCompA LdtName="Lam Duc Tai" LdtAge="20"/>
    </div>
  );
}

export default App;