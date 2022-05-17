import React from 'react'
import Item from './Item'

const ItemList = (listaItems) => {
  return (
    <div>
        {listaItems.map((product) => (
          <ItemList product={product} key={product.id}/>
        )
      )}
    </div>
  )
}

export default ItemList