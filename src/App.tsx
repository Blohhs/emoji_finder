import Header from './components/Header';
import EmojiGrid from './components/EmojiGrid';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <EmojiGrid />
      </main>
    </div>
  );
}

export default App;