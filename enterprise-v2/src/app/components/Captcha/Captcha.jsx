

'use client'
import Image from 'next/image';
import Flecha from '../../../../public/images/flecha.png'
import Meta from '../../../../public/images/terminar.png';
import React from 'react';
import { useEffect } from 'react';
import Spinner from '../../../../public/images/spinner.gif'
import Check from '../../../../public/images/check.png'

export default function Captcha({form}) {

const [status, setStatus_] = React.useState('none');
const [statuscaptcha, setStatuscaptcha] = React.useState('block');
const [statusLoader, setStatusLoader] = React.useState('none');
const [statusApi, setStatusApi] = React.useState('');
const [apiresponse, setApires]=React.useState('Enviando datos... por favor espere');
const [spinnerStatus,setSpinnerStatus]=React.useState('block');

const [processed, setProcessed] = React.useState(false);


useEffect(()=>{

    if(form.st && processed==false){
        setStatus_('block')
    }
    if (processed) {
        setStatus_('none')
    }
})




async function drop(e){
    var data = e.dataTransfer.getData("text");
    if(data.includes('flecha')){
        setStatuscaptcha('none');
        setStatusLoader('block');
        setSpinnerStatus('block')
        await sendData(form);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setApires('Datos enviados correctamente, contactaremos con usted lo antes posible. Gracias');
        setStatusApi(<Image src={Check} width={100} height={100} alt="Loader" className="m-auto" />)
        setSpinnerStatus('none');
        await new Promise(resolve => setTimeout(resolve, 5000));
        setProcessed(true)
    }
}


function sendData(form){
    let post_data = { method: 'POST',headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}, body: JSON.stringify({inputs:form})}
    return fetch('api/datalakehub', post_data)
    .then(res => res.json())
    .then(function (res){
        return res;
    });
}


function dragOver(e){e.preventDefault()}
function dragStart(e){e.dataTransfer.setData("text", e.target.id);}

return (
<div className='popcontainer' style={{display:status}}>

  <div className="captcha">
      <div className="relative">
          <div className="relative bg-white rounded-lg shadow"> 
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                     <div>CAPTCHA </div> 
                  </h3>

              </div>

              <div className='w-full p-3'  style={{display:statusLoader}}>
                <Image src={Spinner} width={100} height={100} alt="Loader" className="m-auto" style={{display:spinnerStatus}}/>
              <p className="mb-3 font-normal text-gray-700">{apiresponse}</p>
              {statusApi}
              
              </div>

              <div className='subcont' style={{display:statuscaptcha}}>
                <p className="mb-3 font-normal text-gray-700">Por favor arrastre la fecha amarilla hasta  la meta para terminar el envio del formulario (requerido)</p>
                <div className='w-full flex p-2'>
                <Image id="flecha" draggable="true" src={Flecha} width={50} height={50} alt="Picture of the author" className="rounded-t-lg" onDrag = { e => dragStart(e) }/>
                <Image src={Meta} width={50} height={50} alt="Picture of the author" className="rounded-t-lg  ml-auto meta" onDragOver={ e => dragOver(e)} onDrop={ e => drop(e)} />
                </div>
             </div>

          </div>
      </div>
  </div>

 
  </div>

  )
}
