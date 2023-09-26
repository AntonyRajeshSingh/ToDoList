import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import List from "./List";
import React from "react";
import { AddItem } from "./AddItem";
import Search from "./Search";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")))  
  const [search,setSearch]=useState('')

  const [newItem,setNewItem] = useState(" ")
  
  const addItem = (item) =>{
    const id = items.length ? items[items.length -1].id+1 : 1;
    const addNewItem ={id,checked:false,item};
    const listItem = [...items,addNewItem];
    setItems(listItem);
    localStorage.setItem("todolist",JSON.stringify(listItem))
  }

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  
  };
  
  const handleSubmit =(e) =>{ 
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem)
    setNewItem(" ")
  }
 
  return (
    <div>
      <Header title="NEW APP" />
      <main>
      
        <AddItem newItem = {newItem} setNewItem = {setNewItem} handleSubmit={handleSubmit}  />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <List items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
        handleCheck={handleCheck} handleDelete={handleDelete} /> 
      
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
