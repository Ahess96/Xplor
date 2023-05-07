import React, { useState } from 'react'


export default function SearchPage() {
  
  const [searchResults, setSearchResults] = useState([]);

  // async function getSearchResults() {
  //   const response = await recreationAPI.search();
  //   console.log(response)
  //   const data = await response.json();
  //   setSearchResults(data.searchResults);
  // }
  
  return (
    <>
      {/* <button onClick={getSearchResults}>Search</button> */}
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.ActivityName}</li>
        ))}
      </ul>
    </>
  )
}
