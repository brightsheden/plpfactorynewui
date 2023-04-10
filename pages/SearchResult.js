import Templates from '@/components/templates'
import React from 'react'

function SearchResult() {
  return (
    <div className='mt-5'>
        <h2 className='text-2xl font-bold my-2'>Search result for template</h2>
        <Templates/>
    </div>
  )
}

export default SearchResult