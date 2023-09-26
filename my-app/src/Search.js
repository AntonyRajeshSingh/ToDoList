import React from 'react'

function Search({search,setSearch}) {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault}>
        <label htmlFor='search'>Search</label>
        <input
            type='text'
            id='search'
            role="searchbox"
            placeholder='Search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        ></input>

    </form>
  )
}

export default Search