import './app.css'
import { Brand, CTA, Navbar} from './components';
import { Header, Blog, Possibility, Features, WhatGPT3, Footer } from './container';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
