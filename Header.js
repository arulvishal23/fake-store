import { Link,useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
  const handleLogout = () => {

  localStorage.removeItem(
    "isLoggedIn"
  );

  localStorage.removeItem(
    "role"
  );

  window.location.href = "/login";
};
  return (
    
    <header className="header">
      <h2>React API Web App</h2>
     


      <nav>
        
        
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
         <button onClick={handleLogout}>Logout</button>
         
      
      </nav>
    </header>
  );
}

export default Header;