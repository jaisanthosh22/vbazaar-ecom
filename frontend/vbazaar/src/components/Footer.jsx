function Footer() {
    return ( 
    <>
      <footer>
    <div className="footer-grid">
        <div>
        <div className="flogo"> vBazaar</div>
        <p>Your one-stop shop htmlFor the best products at the best prices.</p>
        <div
        style={{
            marginTop: "14px",
            display: "flex",
            gap: "12px",
        }}
>               <span>📘</span><span>📷</span><span>🐦</span><span>▶️</span>
        </div>
        </div>
        <div>
        <h4>Shop</h4>
        <ul><li>All Products</li><li>Categories</li><li>Deals</li><li>New Arrivals</li></ul>
        </div>
        <div>
        <h4>Customer Service</h4>
        <ul><li>Contact Us</li><li>Shipping Policy</li><li>Returns & Exchanges</li><li>FAQ</li></ul>
        </div>
        <div>
        <h4>Company</h4>
        <ul><li>About Us</li><li>Careers</li><li>Privacy Policy</li><li>Terms & Conditions</li></ul>
        </div>
        <div>
        <h4>Subscribe to our newsletter</h4>
        <p>Get updates on new products and offers</p>
        <div className="sub-box">
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
        <div
            style={{
                marginTop: "16px",
                display: "flex",
                gap: "8px",
                fontSize: "20px",
            }}
            >💳 🟠 🅿️ 🍎 🇬</div>
        </div>
    </div>
    <div className="copyright">© 2025 vBazaar. All rights reserved.</div>
    </footer>
    
    
    </> );
}

export default Footer;