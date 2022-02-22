import React from "react";
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';


const Header = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="header">
      <div>
        <h1 className="header-text">Notes</h1>
      </div>
      <div>
        <span onClick={handleMode}>
          {darkTheme ? (
          <FaSun size='24' className='header-icon' />
          ) : (
          <FaMoon size='24' className='header-icon' />
          )}
        </span>
      </div>
    </div>
  )
}

export default Header;