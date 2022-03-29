import React, {useState} from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-conatiner">
                <Link to="/" className="navbar-logo">
                    TRVL <i className="fab fa-typo3">
                        
                    </i>
                </Link>
            </div>
        </nav> 
    </>
  )
}

export default Navbar