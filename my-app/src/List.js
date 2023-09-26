import React from 'react';
import ListItem from './ListItem';
import './index.css';

const List = ({items,handleCheck,handleDelete}) => {
  
  return (
        <main>
            {items.length ? (
                <ListItem items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : ( <p >Empty</p> )}
                
        </main>
    );
};

export default List;
