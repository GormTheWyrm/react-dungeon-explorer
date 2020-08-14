import React from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';

function App() {

  // Do I need to have different pages for different screen sizes? 
  // Probably not, but it would be easier to manage css...

  // right here there shoudl be some management of screen size... if statement.
  // and I should add links at the top
  return (
    <div className="backgroundDiv container-fluid">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
