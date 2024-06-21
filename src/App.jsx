import React from 'react';
import { useState } from 'react'
import './App.css'
import Footer from "./components/Footer";
import TerraHomeCard from './components/TerraHomeCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <TerraHomeCard />
    <Footer />
</div>
  );
}

export default App;
