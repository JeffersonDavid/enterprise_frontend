'use client'
import Captcha from '../components/Captcha/Captcha_no';
import React from 'react';
import { useRef } from 'react';

export default function contactPage() {

const [username, setUsername] = React.useState('');
const [email, setMail] = React.useState('');
const [phone, setPhone] = React.useState('');
const [msg, setMsg] = React.useState('');
const [status, setStatus] =  React.useState(false);

const form_ref = useRef(null);

const form = { un:username, mail:email, ph:phone, st:status }

const [validation,setValiadtion] = React.useState('');

const [classInputForms,setclassInputForms] = React.useState('block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500');


function SendData(){
  let errors = []
  for (const key in form) {
    let data = form[key]
    if( data === '' || data === undefined || data === null) {
      switch (key) {
        case 'un':
          setValiadtion('Por favor introduzca un nombre');
          setStatus(false)
          errors.push(key)
        break;
        case 'mail':
          setValiadtion('Por favor introduzca un email valido');
          setStatus(false)
          errors.push(key)
        break;
        case 'ph':
          setValiadtion('Por favor introduzca un teléfono');
          setStatus(false)
          errors.push(key)
        break;
      }
    }
  }
  if(arrayIsEmpty(errors)){

    form_ref.current.style.display = 'none'
    setValiadtion();
    setStatus(true)
  }
}




function arrayIsEmpty(array) {
  if (!Array.isArray(array)) {
      return FALSE;
  }
  if (array.length == 0) {
      return true;
  }
  return false;
}


return( 

<div className='m-auto w-[100%]'>

<Captcha form={form} />

    <div className='secure-container flex justify-center items-center'>
        <div className="w-full max-w-xl border" ref={form_ref}>
        
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-1">
                    <p className='m-3 block text-gray font-bold'> Contacto a través de formulario </p>
                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Nombre y apellidos
                        </label>
                        <input className={classInputForms} id="username" type="text" placeholder="nombre..." onChange={e => setUsername(e.target.value)} value={username}/>
                    </div>

                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phone">
                            Telefono
                        </label>
                        <input className={classInputForms} id="phone" type="text" placeholder="phone..." value={phone} onChange={e => setPhone(e.target.value)}/>
                    </div>

                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                            email
                        </label>
                        <input className={classInputForms} id="email" type="email" placeholder="email..." value={email} onChange={e => setMail(e.target.value)}/>
                    </div>

                    <div className="mb-1">
                    <textarea id="message" rows="4" className={classInputForms} placeholder="(opcional) escribe aqui tu comentario..." value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                    </div>              

                    <div className="flex items-center justify-between">
                        <button className="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button" onClick={e => SendData(e)}>
                            Enviar
                        </button>
                        <p className="text-red-500 text-xs italic"> {validation}  </p>
                    </div>
                </form>
            </div>
        </div>
    </div>

    );
  }
  