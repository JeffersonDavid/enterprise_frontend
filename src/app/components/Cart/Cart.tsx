'use client'
import React from "react"
import { CartContract } from './Contracts'
import { securevalidation, checkLocalStorage, mustShowCartDetails } from './CartUtils'
import Link from "next/link";
import { useEffect,  useState } from 'react';


export default function CartComponent( props: CartContract) {

    const persistance = checkLocalStorage(props);
    const validation = securevalidation( props );

    const [cartsProps, setcartsProps] = useState( JSON.parse(localStorage.getItem('CartProps')));

    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        setShowPage(mustShowCartDetails(cartsProps))
      }, [cartsProps]); 


    let html = null;

    switch (props.data.type_component) {

        case 'navLink':

            html =  <Link href="/my-orders" className="drsignal block px-4 py-2 hover:bg-gray-100 gray-10"> Mis pedidos</Link>
           
        break;

        case 'page':

            if(showPage){

                html =  <div className="h-screen w-screen flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                        HAY PRODUCTOS PARA MOSTRAR
                            </div>
                         </div>

            }else{

               html = <div className="h-screen w-screen flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h3>Actualmente no tiene nigún producto añadido al carrito</h3>
                                    <h3>  Puede consultar nuestros productos desde el siguiente enlace </h3>
                                    <Link href="/orders" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ver a productos {'>>>'} </Link>
                            </div>
                      </div>

            }

        case 'simpleLink':

            if(showPage){
                html = <Link href="/my-orders" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ver a productos {'>>>'} </Link>
            }
          
         
        
    }

  return html
    
}

