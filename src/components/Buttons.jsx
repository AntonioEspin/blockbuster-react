import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/components/Buttons.css'

const Buttons = () => {
  const {nextPage, previousPage} = useContext(AppContext)
  
  const handleNextPage = () => {
    nextPage()
  }

  const handlePreviousPage = () => {
    previousPage()
  }
  return (
    <section className="buttons">
      <button onClick={handlePreviousPage}>Anterior</button>
      <button onClick={handleNextPage}>Siguiente</button>
    </section>
  )
}

export default Buttons