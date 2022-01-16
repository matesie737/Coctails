import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

import NotFound from "../error/NotFound/NotFound"
import HomePage from "../pages/Home/HomePage"
import Template from '../pages/Template/Template'
import Browser from '../pages/Browser/Browser'
import Favourites from '../pages/Favourites/Favourites'
import About from '../pages/About/About'
import List from '../pages/List/List'

function App() {
    return(
      <Router>
        <Routes >
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Template page={<HomePage />} />} />
          <Route path="/browser" element={<Template page={<Browser />} />} />
          <Route path="/favourites" element={<Template page={<Favourites />} />} />
          <Route path="/about" element={<Template page={<About />} />} />
          <Route path="/list" element={<Template page={<List />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    );
}

export default App;