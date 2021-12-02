import React from "react";
import Layout from "./Layout";
import Carrousel from "./Carrousel";
import MoviesContainer from "./MoviesContainer";
import {ContainerContext} from '../context/AppContext'
import '../styles/global.css'

const App = () => {
  
  return (
    <ContainerContext>
      <Layout>
        <Carrousel/>
        <MoviesContainer/>
      </Layout>
    </ContainerContext>
  )
}

export default App;