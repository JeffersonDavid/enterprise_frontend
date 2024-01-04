
'use client'

import { list } from 'postcss';
import { ProductCart,CartList } from './Contracts'

const claveLocalStorage: string = 'CartProps';


export function securevalidation( ) {
    /*

    const comp_type : string = props.data.type_component

    switch (comp_type) {
        case 'navLink' : break;
        case 'simpleLink' : break;
        case 'page' : break;
        default: throw new Error('El valor del tipo CartContract no es válido o no esta dentro de los tipos permitidos ' + props.data.type_component );
      }
      */
   
}



export function checkLocalStorage( ){ }

export function ValidateProductCart( product: ProductCart ) : void {

    if ( product.type !== 1 && product.type !== 2 ) {
        throw new Error('Tipo de producto no valido ');
    }
    
 }

export function validateCartStorage() : void {
    let savedItem: CartList | null | undefined = JSON.parse( localStorage.getItem(claveLocalStorage) || 'null');
    if (savedItem == null){
        const cartList : CartList = { products : []}
        localStorage.setItem( claveLocalStorage,  JSON.stringify(cartList));
    }
}

export function pushProductToCart( product: ProductCart ) : void {

    validateCartStorage();
    ValidateProductCart( product )

    let storageCarList: CartList  = JSON.parse( localStorage.getItem(claveLocalStorage) || 'null');

    if ( storageCarList.products.length === 0 ){
        let carlist : CartList = { products: [product] }
        localStorage.setItem( claveLocalStorage,  JSON.stringify(carlist));
        return 
    }

    if ( storageCarList.products.length > 0 ){
   
        let existProduct = storageCarList.products.some((objeto) => {
            // Aquí puedes personalizar la lógica de comparación según tus necesidades
            return objeto.type === product.type && objeto.quantity === product.quantity ; // Ejemplo de comparación por propiedad "id"
        });
          
        if(existProduct){

           /// console.log('el objeto ya fue añadido')
            const indiceDelProducto :number = storageCarList.products.findIndex((objeto) => {
                return objeto.type === product.type;
            });

           storageCarList.products[indiceDelProducto] = product
           localStorage.setItem( claveLocalStorage,  JSON.stringify(storageCarList));
            return

        }else{
            //console.log('el objeto no fue add aun')
            storageCarList.products.push(product)
            localStorage.setItem( claveLocalStorage,  JSON.stringify(storageCarList));
            return
        }

    }

}


export function mustShowCartDetails(): boolean {
    let storageCarList: CartList | null | undefined = JSON.parse(localStorage.getItem(claveLocalStorage) || 'null');
  
    // Verificar si storageCarList no es null ni undefined
    if (storageCarList != null) {
      // Verificar si la propiedad products no es null ni undefined y si la longitud es mayor que cero
      return storageCarList.products != null && storageCarList.products.length > 0;
    }
  
    // Si storageCarList es null o undefined, o si la propiedad products es null o undefined, retornar false
    return false;
}


export function fetchCartProducts(): CartList {

    let stringItem :string | null = localStorage.getItem(claveLocalStorage) 

    if( stringItem === null ){
        const cartList : CartList = { products : []}
        return cartList;
    }

    let parsedCarList = JSON.parse(stringItem)
    const cartList : CartList = parsedCarList
    return cartList
}


export function removeProductToCart( product: ProductCart ){
    /*
    validateStorage()
    const allowed_types: number[] = [1,2]
    if (!allowed_types.includes(type)) {throw new Error(`El tipo ${type} no es un valor permitido.`)}
    const cart_ = JSON.parse(localStorage.getItem(claveLocalStorage))
    let cart: CartContract = cart_
    const filteredProducts: number[] = (cart.data.products_added).filter((product) => product !== type);
    cart.data.products_added = filteredProducts
    localStorage.removeItem(claveLocalStorage);
    localStorage.setItem( claveLocalStorage , JSON.stringify(cart));

    const storageChangeEvent = new Event('storageChange', { bubbles: true });
    window.dispatchEvent(storageChangeEvent);
    console.log('removed from cart')
    console.log(cart_)
    */

}




