import React from "react";
import {
  RiMoonClearLine,
} from 'react-icons/ri';
import {
  BiSun,
} from 'react-icons/bi';
import useDarkMode from '../../hooks/useDarkMode';


const Header = () => {

  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)

  return (
    <div className="header">
      <div>
        <h1 className="header-text">Notes</h1>
      </div>
      <div>
        <span onClick={handleMode}>
          {darkTheme ? (
          <BiSun size='24' className='header-icon' />
          ) : (
          <RiMoonClearLine size='24' className='header-icon' />
          )}
        </span>
      </div>
    </div>
  )
}

export default Header;