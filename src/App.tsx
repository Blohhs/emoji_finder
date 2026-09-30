import Header from './components/Header';
import EmojiFinder from './components/EmojiFinder';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <EmojiFinder />
      </main>
    </div>
  );
}

export default App;