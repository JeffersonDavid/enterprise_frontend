
'use client'

import { list } from 'postcss';
import { ProductCart,CartList } from './Contracts'

const claveLocalStorage: string = 'CartProps';



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

    const storageChangeEvent = new Event('storageChange', { bubbles: true });

    validateCartStorage();
    ValidateProductCart( product )
   

    let storageCarList: CartList  = JSON.parse( localStorage.getItem(claveLocalStorage) || 'null');

    if ( storageCarList.products.length === 0 ){
        let carlist : CartList = { products: [product] }
        localStorage.setItem( claveLocalStorage,  JSON.stringify(carlist));
        window.dispatchEvent(storageChangeEvent);
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
           window.dispatchEvent(storageChangeEvent);
            return

        }else{
            //console.log('el objeto no fue add aun')
            storageCarList.products.push(product)
            localStorage.setItem( claveLocalStorage,  JSON.stringify(storageCarList));
            window.dispatchEvent(storageChangeEvent);
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


export function removeProductToCart( product: ProductCart ) : void {

    let cartList :CartList = fetchCartProducts();
    const storageChangeEvent = new Event('storageChange', { bubbles: true });

     // Usamos map para crear una nueva copia del array, pero podemos usar también el operador de propagación [...cartList]

     const updated_list: ProductCart[] = cartList.products.filter(
        producto => producto.type != product.type
      );
    
    cartList.products = updated_list;

    localStorage.setItem( claveLocalStorage,  JSON.stringify(cartList));
    window.dispatchEvent(storageChangeEvent);

}


export function fetchAvailableProducts() : CartList {
    
    let available_products :CartList = { 
        products: [ {type: 1, quantity: 1}, {type: 2, quantity: 1} ]
    }

    return available_products;
}

