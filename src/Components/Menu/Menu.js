import React from 'react';
import { ToggleMenu } from './MenuStyles'

const Menu = ({ open }) => {
  
  return (
    <ToggleMenu open={open}>
      <ul className='menuList'>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu
