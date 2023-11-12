'use client'
import React from "react"
import { ReactNode } from 'react';
import { CartContract } from './Contracts'
import { securevalidation, checkLocalStorage, mustShowCartDetails, fetchCartProducts , removeProductToCart} from './CartUtils'
import Link from "next/link";
import { useEffect,  useState } from 'react';

import trashIcon from '../../../../public/images/trash-red-icon.png'
import Image from "next/image";


export default function CartComponent( props: CartContract) {
    
    let html: ReactNode  = null;

    const [selected_products, setSelectedProducts] = useState(fetchCartProducts())

    const persistance = checkLocalStorage(props);
    const validation = securevalidation( props );
    const [showPage, setShowPage] = useState( mustShowCartDetails() ? true : false );


    useEffect(() => {
        // Función que se ejecuta cuando cambia el almacenamiento local
        const handleStorageChange = (event) => {
          if (event.type === 'storageChange') {

             setSelectedProducts(fetchCartProducts())

             if(mustShowCartDetails()){
                setShowPage(true)
             }else{
                setShowPage(false)
             }

          }
        };
    
        window.addEventListener('storageChange', handleStorageChange);

        return () => { window.removeEventListener('storageChange', handleStorageChange) };

      }, []);


    const removeItem = (type: number) => { removeProductToCart(type) }


    switch (props.data.type_component) {

        case 'navLink':
            html =  <Link href="/my-orders" className="drsignal block px-4 py-2 hover:bg-gray-100 gray-10"> Mis pedidos</Link>
        break;

        case 'page':
            if(showPage){
                html =  <div className="h-screen w-screen flex items-center justify-center">
                            

                                    <form  className="mt-2 mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">
                                        <h2 className="text-2xl font-bold text-center text-gray-700 mb-1">Formaliza tu Pedido</h2>
                                            <div className="mb-1">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                                                    Nombre y Apellidos
                                                </label>
                                                <input id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="introduce tu Nombre completo..." />
                                            </div>

                                            <div className="mb-1">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                                    Email
                                                </label>
                                                <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="intruduce tu email..."/>
                                            </div>

                                            <div className="mb-1">

                                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="products"> Productos añadidos :  </label>


                                                    { selected_products.map((type, index) => (
                                                     
                                                            <div className="" key={index}>

                                                                    <div className="flex">
                                                          
                                                                        <label className=" inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-blue-700" htmlFor="products">
                                                                            - { type === 1 ? 'Pan pita blanco' : 'Pan pita integral ' }
                                                                            </label>
                                                                            <button   type="button"  onClick={() => removeItem(type)}> <Image src={trashIcon} width={20} height={20} alt="Com" className=""/> 
                                                                            </button>
                                                                    </div>

                                                                    <div className="flex p-1">

                                                                        <label className="ml-4 text-gray-700 text-sm font-bold mr-5 p-2">
                                                                            <span className="text-red-500">  * </span> Confirme la cantidad (cajas):  
                                                                        </label>

                                                                        <div className="flex">
                                                                                <input 
                                                                                type="number" 
                                                                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                                                                min="1"
                                                                                max="10"
                                                                                defaultValue="1"
                                                                                />
                                                                        </div>
                                                                    </div>

                                                            </div>

                                                    ))}
                                            
                                            </div>

                                            <div className="mb-1">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                                    Telefono
                                                </label>
                                                <input id="phone" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="intruduce tu telefono..."/>
                                            </div>

                                            <div className="mb-1">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                                    Direccion
                                                </label>
                                                <input id="phone" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirma tu dirección "/>
                                            </div>

                                            <div className='flex'>
                                                <button  name='submit' id='submit_btn' type='submit' className="mt-2 btnbcolor inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"> Confirmar pedido </button>
                                            </div>    
                                    </form>
                         </div>

            }else{

               html = <div className="h-screen w-screen flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h3>Actualmente no tiene nigún producto añadido al carrito</h3>
                                    <h3>  Puede consultar nuestros productos desde el siguiente enlace </h3>
                                    <Link href="/orders" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ir a productos {'>>>'} </Link>
                            </div>
                      </div>
            }
        break


        case 'simpleLink':
            if(showPage){ html = <Link href="/my-orders" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ir al pedido {'>>>'} </Link> }
        break
    
    }

    return html
    
}

