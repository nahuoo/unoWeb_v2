import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { ProductosProvider } from './Context/Context'
import GlobalStyle from './Styles/Globalstyles'
function App () {
  return (
    <ProductosProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ProductosProvider>
  )
}
export default App
