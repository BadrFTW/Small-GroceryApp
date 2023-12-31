import React from 'react'
import Item from './Item'
const List = ({items,supprimer,onCheck}) => {
  return (
    <ul>

    {items.map((item)=>{return(
<Item key={item.id} item={item}  onCheck={onCheck} supprimer={supprimer}/>
)
    
      })}
  </ul>
  )
}

export default List