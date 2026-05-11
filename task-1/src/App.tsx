import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <div style={{ display: 'flex', minHeight: '60vh' }}>
        <Sidebar />

        <main style={{ padding: '20px' }}>
          <h2>Our Products</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <ProductCard name="iPhone 15" price={999} />
            <ProductCard name="MacBook Pro" price={1999} />
            <ProductCard name="AirPods Max" price={549} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;