'use client'
import React from "react"
import { ReactNode } from 'react';
import { ProductCart,CartList } from './Contracts'
import { mustShowCartDetails, fetchCartProducts , removeProductToCart, fetchAvailableProducts,pushProductToCart } from './CartUtils'
import trashIcon from '../../../../public/images/trash-red-icon.png'
import Image from "next/image";

import { useEffect,  useState } from 'react';


interface Order {
    type: number;
    quantity: number;
  }
  

export default function CartComponent() {

    
    let html : ReactNode  = null;
    let cartList : CartList = fetchCartProducts();
    let available_pr : CartList = fetchAvailableProducts();
    const [ selected_products ,  setSelectedProducts ] = useState( cartList )
    const [products_available, ] = useState(available_pr)

    const [showPage , setShowPage] = useState( mustShowCartDetails() ? true : false );

    
    useEffect(() => {
        // Función que se ejecuta cuando cambia el almacenamiento local
        const handleStorageChange = (event :any ) => {
          if (event.type === 'storageChange') {
                setSelectedProducts(fetchCartProducts())
          }
        };
        window.addEventListener('storageChange', handleStorageChange);
        return () => { window.removeEventListener('storageChange', handleStorageChange) };
      }, []);

  
    const getProductByType = ( product : ProductCart ) => {  
        return product.type === 1 ? 'Pan pita blanco' : 'Pan pita intergral'
    };


    const setSelectedProducts_ = ( product : ProductCart ) => { 
        pushProductToCart( product )
    };

    const sendOrder = (simage:any) => {  console.log('test')};

    html =  <div className="h-screen w-screen flex items-center justify-center">
                    <form  className="formcomp_p border mt-1 mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">
                                <h2 className="text-2xl font-bold text-center text-gray-700 m-10">Formaliza tu Pedido</h2>
                                            <div className="mb-1">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                                                    Nombre y Apellidos
                                                </label>
                                                <input id="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="introduce tu Nombre completo..." />
                                            </div>

                                            <div className="mb-2">
                                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                                    Email
                                                </label>
                                                <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="intruduce tu email..."/>
                                            </div>

                                            <div className="mb-1"></div>

                                            <div className="mb-1 flex">

                                                <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-1 mt-2"> Productos añadidos :  </label>

                                                        { selected_products.products.map( ( product: ProductCart, index ) => (

                                                            <div className="cnt" key={index}>
                                                                
                                                                <div className="flex">
                                                                            <span className ="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"> * { product.type === 1 ? 'Pan pita blanco' : 'Pan pita integral ' } </span>
                                                                            <button type="button"
                                                                            onClick={ ()=> removeProductToCart( product ) }> 
                                                                                   <Image src={trashIcon} width={20} height={20} alt="Com" className="mbbtnheart"/> 
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

                                                        <div className="ml-[15%]">  
                                                            <div className="flex text-gray-700 text-sm font-bold mb-1 mt-10"> 
                                                                <span className="m-1">Añadir otros productos (opcional) </span> 
                                                            </div>
                                                            <div className="flex">
                                                                <select onChange={(e) => setSelectedProducts_( JSON.parse(e.target.value))} id="productos" name="productos" className=" text-sm mt-3 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                                                                
                                                                        {
                                                                            products_available.products.map(  (product: ProductCart, index ) => (
                                                                                    <option value={ JSON.stringify(product) } className="text-sm">
                                                                                        { getProductByType(product) }
                                                                                    </option>
                                                                            ))
                                                                        }

                                                                </select>
                                                                <div className="p-4"></div>
                                                            </div>
                                                        </div>
                                                  
                                                
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

                                            <div className='flex p-4'>
                                                <button  name='submit' id='submit_btn' type='button' className="mt-2 btnbcolor inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" 
                                                onClick={sendOrder}> CONFIRMAR </button>
                                            </div>    
                        </form>
                </div>
    return html
    
}

