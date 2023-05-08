import React from 'react'

export default function RecAreaDetails({activeRecArea}) {

    const keywordsArray = activeRecArea.Keywords.split(',');

  return (
    <>
        <ul>
            {keywordsArray.map((keyword, idx) => (
                <>
                <li key={idx}>{keyword}</li>
                <button>Add</button>
                </>
            ))}
        </ul>
    </>
  )
}
