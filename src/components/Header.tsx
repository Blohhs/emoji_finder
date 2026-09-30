import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Placeholder" 
          className="search-input" 
        />
      </div>
    </header>
  );
};

export default Header;