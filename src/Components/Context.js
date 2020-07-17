import React, { useEffect, useState, createContext } from 'react'

export const ContextProductos = createContext()

export const ProductosProvider = (props) => {

     const [productosLista, setProductosLista] = useState('')
     const [isFetching, setIsFetching] = useState(true)
     const [filtro, setFiltro ] = useState([])

     useEffect(() => {
          fetch('http://18.228.4.19:1337/equipos')
          .then(res => res.json())
          .then(data => {
              setProductosLista(data)
              setIsFetching(false)
               })
          },[])
     const value = {
          productosLista,
          isFetching,
          filtro,
          setFiltro
     }
             return(
                  <ContextProductos.Provider value={value} >
                       {props.children}
                  </ContextProductos.Provider>
             )
}

