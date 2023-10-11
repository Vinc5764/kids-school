import Hero from './Hero';
import './App.css';
import Navbar from './Navbar';
import Quality from './Quality';
import Partners from './Partners';
import Product from './Product';
import Pricing from './Pricing';
import Packages from './Packages';
import Newsletter from './Newsletter';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quality />
      <div className="my-4 flex items-center justify-center pt-10">
        <Partners />
      </div>
      <div className="flex items-center justify-center bg-[#26335D]">
        <Product />
      </div>
      <div>
        <Pricing />
      </div>
      <div className="ml-20">
        <Packages />
      </div>
      <div className="mb-8 flex  h-[36rem] flex-col items-center justify-center gap-4">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
