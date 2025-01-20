import React from 'react';

// import logo from '../../assets/logoimpsum-285.svg';
import Logo from '../Logo/Logo';
import marketImage from '../../assets/market.png';

export const Header = () => {

    const [ isOpen, setIsOpen ] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
    <nav className="relative bg-white dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <a href="#">
                    <Logo/>
                </a>
    
                <div className="flex md:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* x-cloak className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" */}
            <div  className="opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              
    
                <div className="flex justify-center md:block">
                    <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <img src={marketImage} className="w-6 h-6" alt="Market" />                    
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>

 
</header>

  )
}

export default Header
