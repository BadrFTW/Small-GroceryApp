import React from 'react'

const Search = ({setSearch,search}) => {
  return (
    <form className="searchForm" onSubmit={(e)=>(e.preventDefault())} onChange={(e)=>(setSearch(e.target.value))} value={search}>
        <label htmlFor='ids' >Search </label>
        <input className='searchFormx' placeholder='search here' id='ids' role='searchbox' >
        
</input>

    </form>
  )
}
export default Search