import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

const Item = ({item,supprimer,onCheck }) => {
  return (
    <li className="item"  onDoubleClick={()=>(onCheck(item.id))}>
    <input type="checkbox" checked={item.checked} onChange={()=>(onCheck(item.id))}  tabIndex="1"></input>
    <label style={(item.checked)?{textDecoration:"line-through"}:null}>{item.item}</label>
    
    <FaTrashAlt role="button"  onClick={()=>supprimer(item.id)} tabIndex="0" aria-label='`Delete{item.item}`'/>
    </li>
  )
}

export default Item;