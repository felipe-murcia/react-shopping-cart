import React from 'react';

// import logo from '../../assets/logoimpsum-285.svg';
import Logo from '../Logo/Logo';
import marketImage from '../../assets/market.png';

export const Header = ({ numCart = 0, setShowCart }:any) => {

    const [ isOpen, setIsOpen ] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
    <nav className="relative bg-white dark:bg-gray-900">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <a href="#" onClick={setShowCart}>
                    <Logo/>
                </a>
    
                <div className="flex md:hidden">
                    <button onClick={setShowCart} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <img src={marketImage} className="w-6 h-6" alt="Market" />  
                    </button>
                </div>
            </div>
            <div  className="opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              
    
                <div className="flex justify-center md:block">
                    <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    </a>

                    
                    <button onClick={setShowCart} type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-lime-100 rounded-lg hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <img src={marketImage} className="w-6 h-6" alt="Market" />  
                        {
                            numCart ?
                            <span className="inline-flex items-center justify-center w-8 h-8 ms-2 text-m font-semibold text-white bg-lime-600 rounded-full">
                                {numCart}
                            </span>
                            :null
                        }              
                    </button>


                </div>
            </div>
        </div>
    </nav>

    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>

 
</header>

  )
}

export default Header
