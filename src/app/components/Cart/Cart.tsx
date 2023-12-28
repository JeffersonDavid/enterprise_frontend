'use client'
import React from "react"
import { ReactNode } from 'react';
import { CartContract } from './Contracts'
import { securevalidation, checkLocalStorage, mustShowCartDetails, fetchCartProducts , removeProductToCart} from './CartUtils'
import Link from "next/link";
import { useEffect,  useState } from 'react';

import trashIcon from '../../../../public/images/trash-red-icon.png'
import Image from "next/image";
import { Input } from "postcss";

interface Order {
    type: number;
    quantity: number;
  }
  

export default function CartComponent( props: CartContract) {

    const [products_available , setproducts_available] = useState([
        {type: 1, desc: 'Pan pita blanco' },
        {type: 2, desc: 'Pan pita integral' },
    ]) 
    
    let html: ReactNode  = null;

    const [selected_products, setSelectedProducts] = useState(fetchCartProducts())


    const persistance = checkLocalStorage(props);
    const validation = securevalidation( props );
    const [showPage, setShowPage] = useState( mustShowCartDetails() ? true : false );
    const [cartData, setCartData] = useState<Order[]>([]);

    const setSelectedCartData = (type: number, quantity: number = 1): void => {
        const order: Order = { type, quantity };
        const index = cartData.findIndex(order_ => order_.type === type);
      
        if (index === -1) {
          // El elemento no existe, agregarlo al array
          setCartData((prevCartData) => [...prevCartData, order]);
        } else {
          // El elemento existe, actualizar el array sin el elemento
          setCartData((prevCartData) => [
            ...prevCartData.slice(0, index),
            ...prevCartData.slice(index + 1),
          ]);
        }
    };


    useEffect(() => {
        
        selected_products.forEach(type => {
            setSelectedCartData(type)
        });

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


    const removeItem = (type: number): void => { removeProductToCart(type) }


    const sendOrder = () : void => {
        
        console.log('sendnig cart......')
        console.log(cartData)
    }

    const setSelectedProducts_ = ( type_: number) : void => {

        const type: number = type_
        
        selected_products.forEach( type_to_filter => {

           if ( type_to_filter != type ){
                selected_products.push(type)
                setSelectedProducts((selected_products) => [...selected_products, type]);
            }
        });

      
        /*
        if (index === -1) {
          // El elemento no existe, agregarlo al array
          setCartData((prevCartData) => [...prevCartData, order]);
        } else {
          // El elemento existe, actualizar el array sin el elemento
          setCartData((prevCartData) => [
            ...prevCartData.slice(0, index),
            ...prevCartData.slice(index + 1),
          ]);
        }
        */

    }



    switch (props.data.type_component) {

        case 'navLink':
            html =  <Link href="/my-orders" className="drsignal block px-4 py-2 hover:bg-gray-100 gray-10"> Mis pedidos</Link>
        break;

        case 'page':
            if(showPage){
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

                                            <div className="mb-1">
                                            </div>

                                            <div className="mb-1 flex">

                                                <div>
                                                        <label className="block text-gray-700 text-sm font-bold mb-1 mt-2"> Productos añadidos :  </label>

                                                        { selected_products.map((type, index) => (
                                                        
                                                                <div className="cnt" key={index}>

                                                                        <div className="flex">
                                                                            <span className ="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"> * { type === 1 ? 'Pan pita blanco' : 'Pan pita integral ' } </span>
                                                                            <button   type="button"  onClick={() => removeItem(type)}> <Image src={trashIcon} width={20} height={20} alt="Com" className="mbbtnheart"/> </button>
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
                                                                                    onChange={(e) => setSelectedCartData(type, e.target.value)}
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
                                                                <select onChange={(e) => setSelectedProducts_(e.target.value)} id="productos" name="productos" className=" text-sm mt-3 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                                                                    {
                                                                                                                                        
                                                                    products_available.map((index) => (

                                                                            <option  
                                                                            value={index.type} 
                                                                            className="text-sm">
                                                                            { index.desc }
                                                                            </option>

                                                                        ))
                                                                    }
                                
                                                                </select>
                                                                <div className="p-4">
                                                               
                                                                </div>
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
                                                <button  name='submit' id='submit_btn' type='button' className="mt-2 btnbcolor inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={sendOrder}> CONFIRMAR </button>
                                            </div>    
                                    </form>
                         </div>

            }else{

               html = <div className="h-screen w-screen flex items-center justify-center">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h3>Actualmente no tiene nigún producto añadido al carrito</h3>
                                    <h3>  Puede consultar nuestros productos desde el siguiente enlace </h3>
                                    <Link href="/orders" className=" mbbtnheart ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ir a productos {'>>>'} </Link>
                            </div>
                      </div>
            }
        break


        case 'simpleLink':
            if(showPage){ html = <Link href="/my-orders" className=" mbbtnheart ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline"> ir al pedido {'>>>'} </Link> }
        break
    
    }

    return html
    
}

