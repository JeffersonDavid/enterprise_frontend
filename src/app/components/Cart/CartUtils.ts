


import { CartContract } from './Contracts'

'use client'

const claveLocalStorage: string = 'CartProps';

export function securevalidation( props: CartContract) {

    const comp_type : string = props.data.type_component

    switch (comp_type) {
        case 'navLink' : break;
        case 'simpleLink' : break;
        case 'page' : break;
        default: throw new Error('El valor del tipo CartContract no es válido o no esta dentro de los tipos permitidos ' + props.data.type_component );
      }
   
}


export function checkLocalStorage( props: CartContract ){

    let stringProps: string = JSON.stringify(props)
    let savedItem = localStorage.getItem(claveLocalStorage)

        if ( !savedItem ){
            localStorage.setItem( claveLocalStorage , (stringProps));
        }       
}



export function pushProductToCart( type: number ){

    const allowed_types: number[] = [1,2]
    if (!allowed_types.includes(type)) {throw new Error(`El tipo ${type} no es un valor permitido.`)}
    
    const cart_ = JSON.parse(localStorage.getItem(claveLocalStorage))

    let cart: CartContract = cart_

    const products: number[] = cart.data.products_added

        if ( products.length < 2 ) {

            const uniqueArray: number[] = products.filter((value, index, self) => self.indexOf(value) === index);
            const typeToAdd: number = type;

            if (!uniqueArray.includes(typeToAdd)) {

                cart.data.products_added.push(typeToAdd);
                localStorage.removeItem(claveLocalStorage);
                localStorage.setItem( claveLocalStorage , JSON.stringify(cart));
            }

        }
        //console.log('pushed to cart')
        //console.log(cart_)
}


export function mustShowCartDetails(props: CartContract): boolean {
    if( (props.data.products_added).length > 0 ){
        return true
    }else{
        return false
    }

}