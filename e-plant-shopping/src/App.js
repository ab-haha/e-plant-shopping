import React, { useState } from 'react';
import ProductList from './ProductList';
import LandingPage from './LandingPage';
import CartItem from './CartItem';
import './App.css';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'products', or 'cart'

  return (
    <div className="App">
      {view === 'landing' && <LandingPage onGetStarted={() => setView('products')} />}
      
      {view !== 'landing' && (
        <>
          <nav style={{backgroundColor: '#4CAF50', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 onClick={() => setView('landing')} style={{cursor: 'pointer'}}>Paradise Nursery</h2>
            <div style={{display: 'flex', gap: '20px'}}>
              <span onClick={() => setView('products')} style={{cursor: 'pointer'}}>Plants</span>
              <span onClick={() => setView('cart')} style={{cursor: 'pointer'}}>🛒 Cart</span>
            </div>
          </nav>

          {view === 'products' ? (
            <ProductList />
          ) : (
            <CartItem onContinueShopping={() => setView('products')} />
          )}
        </>
      )}
    </div>
  );
}

export default App;