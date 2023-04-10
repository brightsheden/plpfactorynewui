import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between bg-gray-100 p-5'>
        <div className='text-blue-900 font-bold text-1xl'>
            Plpfactory
        </div>
        <div className='text-blue-700 font-bold'>
            <ul className='flex space-x-8 '>
                <li>Search</li>
                <li>Login</li>
                <li>Beacom seller</li>
                <li>Blog</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar