import React, { useEffect, useState } from 'react'
import { products } from '../data/productos'
import ItemList from "./ItemList"


const ItemListContainer = () => {
    const[ listaItems, SetListaItems ] = useState ([])
    const task = new Promise ((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 3000)
        
      })

      useEffect (()=> {
          task
          .then((res)=> SetListaItems(res) )
          .catch ((error)=> console.log (error) )
      },[])
    
      task.then((result) => {
        console.log(result)
      }, err => {
        console.log(err)
      }).catch((err) => {
        console.log(err)
      })
  return (
    <div>
        <ItemList listaItems={listaItems}/>
    </div>
  )
}

export default ItemListContainer