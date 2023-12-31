import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer>
        this list has {length} {length>1?"items":"item"}
    </footer>
  )
}

export default Footer