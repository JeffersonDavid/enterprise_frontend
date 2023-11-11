'use client'
import React from "react"
import { ReactNode } from 'react';
import { CartContract } from './Contracts'
import { securevalidation, checkLocalStorage, mustShowCartDetails } from './CartUtils'
import Link from "next/link";
import { useEffect,  useState } from 'react';


export default function CartComponent( props: CartContract) {

    let html: ReactNode  = null;
    const persistance = checkLocalStorage(props);
    const validation = securevalidation( props );
    const [cartsProps, setcartsProps] = useState( JSON.parse(localStorage.getItem('CartProps')));
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        setShowPage(mustShowCartDetails(cartsProps))
      }, [cartsProps]); 


    

    switch (props.data.type_component) {

        case 'navLink':

            html =  <Link href="/my-orders" className="drsignal block px-4 py-2 hover:bg-gray-100 gray-10"> Mis pedidos</Link>
           
        break;

        case 'page':

            if(showPage){

                html =  <div className="h-screen w-screen flex items-center justify-center">
                            

                                    <form  className="mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">

                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Nombre y Apellidos
                                            </label>
                                            <input id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="introduce tu Nombre completo..." />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                                Email
                                            </label>
                                            <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="intruduce tu email..."/>
                                        </div>

                                        <div className="mb-4">

                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="products">Productos añadidos : </label>

                                                <div>
                                                        <label className="ml-2 text-gray-700 text-sm font-bold w-full" htmlFor="products"> - Pita blanco </label>

                                                        <div className="flex">

                                                            <label className="ml-4 text-gray-700 text-sm font-bold w-full" htmlFor="products">
                                                                <span className="text-red-500">  * </span> Seleccione una cantidad: 
                                                            </label>

                                                            <div className="flex">
                                                                    <input id="products" type="number" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=""/>
                                                            </div>
                                                    </div>

                                                </div>
                                          
                                        </div>

                                                
                                    </form>
                           
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

        break
        case 'simpleLink':

            if(showPage){
                html = <Link href="/my-orders" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ver a productos {'>>>'} </Link>
            }
          
         
        
    }

  return html
    
}

