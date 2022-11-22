import React from 'react'
import { Link } from 'react-router-dom'

function LayoutDefault({children}) {
  return (
    <div>
        <header>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to='/greetings'>
                <p>Greetings</p>
            </Link>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default LayoutDefault;