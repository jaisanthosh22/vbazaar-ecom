import Search from "./Search";
import { Link } from "react-router-dom";



function Header() {
    return ( 
    <>
     <div className="topbar">
    <div className="left"><span>🚚 Free Shipping on orders over $50</span></div>
    <div className="right"><span>⏱ 30-Day Returns</span><span>❓ Help Center</span></div>
    </div>

    <header className="main">
    <Link to="/" > <div className="logo"><span className="b"></span> vBazaar</div> </Link>      
    
     <Search/>
     <Link to="/products">Products</Link>
     <Link to="categories">Categories</Link>
     <Link to="deals">Deals</Link>
     <Link to="newarrivals">New Arrivals</Link>

    
    <div className="header-actions">
        <div className="item">♡ <span>Wishlist</span></div>
        <div className="item">👤 <span>Account</span></div>
        <Link to="/cart"> <div className="item">🛒 <span>Cart</span><span className="cart-badge" id="cart-count">8</span></div></Link>
       
    </div>
    </header>
    
    
    </> );
}

export default Header;