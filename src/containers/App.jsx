import React from "react";
import Layout from "./Layout";
import Carrousel from "./Carrousel";
import MoviesContainer from "./MoviesContainer";
import '../styles/global.css'

const App = () => {
  return (
    <Layout>
      <Carrousel/>
      <MoviesContainer/>
    </Layout>
  )
}

export default App;