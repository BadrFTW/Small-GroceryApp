import React from 'react'
import {FaPlus} from "react-icons/fa"
import { useRef } from 'react'
const AddItem = ({setAddItem,addItem,handleSubmit}) => {
const Ref=useRef()
  return (
<form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
    
<label htmlFor='addItem'>write here: </label>
<input type='text'id='addItrem'placeholder='milk,eggs...' autoFocus required
value={addItem}
onChange={(e)=>{setAddItem(e.target.value)}}
ref={Ref}
></input>
<button arial-label="add item" type="submit" onClick={()=>(Ref.current.focus())} >
<FaPlus  />
</button>
</form>
  )
}

export default AddItem