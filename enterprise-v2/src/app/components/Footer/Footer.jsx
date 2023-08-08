'use client'

import Ws from '../../../../public/images/whatsapp.png';
import Image from 'next/image';
import Phone from '../../../../public/images/telephone.png'
import Pr from '../../../../public/images/priv.png'
import React from 'react';
import {useEffect} from 'react';

export default function NavBar() {

    const [phoneNumber, setPhoneNumber] = React.useState('674068438');

    useEffect(() =>{

          let hours = parseInt((new Date).getHours());
         
          if(inRange(hours, 7, 14)){
                setPhoneNumber('+34686335077');
          }

          if(inRange(hours, 14, 17)){
            setPhoneNumber('+34674068438');
          } 

          if(inRange(hours, 17, 23)){
            setPhoneNumber('+34659048535');
          }

          if(inRange(hours, 0, 7)){
            setPhoneNumber('+34659048535');
          }  

    
    });


    function inRange(x, min, max) {
        return ((x-min)*(x-max) <= 0);
    }

    return(
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Pitasol HUB </a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">

                <li className='ftli flex inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-success-700 ring-1 ring-inset ring-success-700/10'>
                <Image src={Pr} width={20} height={20} alt="Com"/>
                    <a href="#" className="mr-4 hover:underline ml-2">Politica de privacidad</a>
                </li>
                <li className='ftli flex inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-success-700 ring-1 ring-inset ring-success-700/10'>
                    <Image src={Phone} width={20} height={20} alt="Com" className=""/>
                    <a href={"tel:"+phoneNumber} className=" mr-4 hover:underline ml-2">Llámanos al {phoneNumber}</a>
                    
                </li>


                <li className='ftli flex inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-success-700 ring-1 ring-inset ring-success-700/10'>
                    <Image src={Ws} width={20} height={20} alt="Com"/>
                    <a href="https://api.whatsapp.com/send/?phone=34674068438&text=Escribenos+tu+consulta+por+aqu%C3%AD...&type=phone_number&app_absent=0" className="mr-4 hover:underline ml-2">Envíanos un Whatsapp </a>
                </li>
            </ul>
            </div>
        </footer>
    )};