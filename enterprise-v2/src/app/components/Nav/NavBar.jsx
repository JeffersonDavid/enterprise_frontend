'use client'

import React, { useState,useEffect,useRef } from 'react'; 

import Image from "next/image"
import Logo from "../../../../public/images/logo.png"
import Link from "next/link"
import PitaIcon from "../../../../public/images/pan-de-pita.png"
import ComunincationIcon from "../../../../public/images/com.png"
import BoxIcon from "../../../../public/images/box.png"
import CompanyIcon from "../../../../public/images/panadero.png"

import Close from "../../../../public/images/close.png"




  

export default function NavBar() {
 
  const pages = [
    {label:'Nosotros', source:'/', iconSrc: <Image src={CompanyIcon} width={30} height={30} alt="Pitasol"/>},
    {label:'Productos', source:'orders', iconSrc: <Image src={PitaIcon} width={30} height={30} alt="Pitasol"/>},
    {label:'Contacto', source:'/contact', iconSrc: <Image src={ComunincationIcon} width={30} height={30} alt="Com"/>},
  ]

  const [dropDownState, setdropDownState] = useState(false);

  const [mobile_menu_state, setmobile_menu_state] = useState(false);

  

  const dropRef = useRef(null);
  const menu_mobile_ref = useRef(null);

  const menucontroller = () => {
     if(dropDownState){
      setdropDownState(false)
     }else{
      setdropDownState(true)
     }    
  };


  const handleOutsideClick = (event) => {
    if(!event.target.classList.contains('drsignal')){
      setdropDownState(false)
    }
  };


  useEffect(() => {

    if(dropDownState){
      document.addEventListener('click', handleOutsideClick);
      dropRef.current.style.display = 'block';
    }
    if(!dropDownState){
      dropRef.current.style.display = 'none';
    }

    if(mobile_menu_state){
      menu_mobile_ref.current.style.display = 'block'
    }


    if(! mobile_menu_state){
      menu_mobile_ref.current.style.display = 'none'
    }

    console.log('esta del menu mobile')
    console.log(mobile_menu_state)


  }, [dropDownState,mobile_menu_state]);



  const mobile_menu_action = () => {
   
    if(mobile_menu_state){
      setmobile_menu_state(false)
     }else{
      setmobile_menu_state(true)
     }  

 };

return (

<header>
<nav className="bg-white border border-gray-10 shadow">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">

    <Link href="/" className="flex items-center"><Image src={Logo} width={150} height={150} alt="Picture of the author"/>
     <span className="self-center text-2xl font-semibold whitespace-nowrap">PITASOL SL</span>
    </Link>


    <button onClick={ mobile_menu_action } data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>

      { 
      
        mobile_menu_state ? <Image src={Close} width={30} height={30}/>  : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

      }
    
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default" ref={ menu_mobile_ref }>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">

        {
            pages.map((element,index) => {
               return( 
                        <div className="link-container" key={index}>
                            <li className="link-navi">
                                  <Link href={element.source} className="block py-2 pl-3 pr-4 text-zinc-950 rounded md:bg-transparent md:p-0" onClick={() => setmobile_menu_state(false)} >{element.label}</Link>
                            </li>
                            <div className="icon_flv" key={index}>
                                {element.iconSrc}
                            </div>
                        </div>         
              )})
        }

      <div className="linkcontainer drsignal">
            <button onClick={menucontroller} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto drsignal">
            <Image src={BoxIcon}  className='drsignal' width={20} height={20} alt="Com"/> Pedidos <svg className="w-5 h-5 ml-1 drsignal" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div ref={dropRef} id="dropdownNavbar" className=" drsignal z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                          <ul className="py-2 text-sm text-gray-700 drsignal" aria-labelledby="dropdownLargeButton">
                            <li key={1} className='drsignal'>
                              <Link href="/blanco" className="drsignal block px-4 py-2 hover:bg-gray-100 border-gray-10 shadow" onClick={() => setmobile_menu_state(false)} >Blanco</Link>
                            </li>
                            <li key={2} className='drsignal'>
                              <Link href="/integral" className="block px-4 py-2 hover:bg-gray-100 drsignal" onClick={() => setmobile_menu_state(false)}>Integral</Link>
                            </li>
                          </ul>
                </div>
        </div>

      </ul>
    </div>
  </div>
</nav>
</header>
)




}


