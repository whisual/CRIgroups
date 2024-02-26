import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <Link to='https://www.crigroups.com/'>
        <div className='flex justify-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
          <img src={Logo} alt="" className=' h-24' />
       </div>
    </Link>
    
  )
}

export default header
