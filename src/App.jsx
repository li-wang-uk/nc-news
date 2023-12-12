import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom"

import './App.css'
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import AllArticlesPage from "../pages/AllArticlesPage";
import Nav from "../components/Nav";

function App() {

  return (
    <BrowserRouter>
    <main className = "App">

<Header/>
<Nav/>
<Routes>
  <Route path='/' element = {<Home />} />
  <Route path='/articles' element = {<AllArticlesPage/>} />
</Routes>
<Footer/>

</main>
    </BrowserRouter>
  )
}

export default App
