

import { CartContract } from './Contracts'


'use client'

export function validateAndFetchObjectProps(props: CartContract) {

    switch (props.type) {

        case 'navLink':

        break;
        case 'simpleLink':


        break;
        default:
          throw new Error('El valor del tipo no es válido o no esta dentro de los tipos permitidos');
      }
   
}


export function checkLocalStorage(props: CartContract ){

    const claveLocalStorage = 'CartProps';

    if (!localStorage.getItem(claveLocalStorage)) {
    localStorage.setItem(claveLocalStorage, JSON.stringify(props));
    }

    const persisted_props = JSON.parse(localStorage.getItem(claveLocalStorage)!);

    return persisted_props;

}