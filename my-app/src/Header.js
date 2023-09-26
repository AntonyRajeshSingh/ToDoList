import React from 'react';



const Header = ({title}) => {
  return (
    <main>
      <h1 className='header'>{title}</h1>
      
    </main>
    
  )
}

Header.defaultProps={
  title:"To-do List"
}

export default Header;