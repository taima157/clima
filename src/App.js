import React from 'react';
import './App.css';
import RoutesPage from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesPage />
      <Footer />
    </div>
  );
}

export default App;
