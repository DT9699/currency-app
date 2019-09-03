import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Page from "./components/Page"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faUserCircle, faArrowUp, faArrowDown);

function App() {
    return (
      <div>
        <Header />
        <Page />
        <Footer />
      </div>
    );
}

export default App;
