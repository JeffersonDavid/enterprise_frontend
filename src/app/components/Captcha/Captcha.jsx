

'use client'

import { useRef, useState , useEffect} from "react";
import React from "react";
import Image from "next/image";
import C1image from '../../../../public/images/perro.jpg'
import C2image from '../../../../public/images/barco.jpg'
import C3image from '../../../../public/images/silueta.jpg'
import C4image from '../../../../public/images/señal.jpg'
import Fetcher from './Fetcher'


export default function Captcha(props) {
    const { form, formStatus} = props;
    const [captchastatus, setStatus] = useState(false);
    const [visibility, setvisibility] = useState('none');
    const captchaRef = useRef(null);
    
    const [captchaImgs, setcaptchaImgs] = useState([

         { source:C1image, label:' Un perro'},
         { source:C2image, label:' Un barco'},
         { source:C3image, label:' Una silueta'},
         { source:C4image, label:' Una señal de trafico'},
    ]);
  
    let rand = captchaImgs[Math.floor(Math.random() * captchaImgs.length)]
    const [target, setTarget] = useState(rand);
    

    useEffect(() => {

      if(formStatus === true){        
          captchaRef.current.style.display = 'block';
      }
      
      if(formStatus === false){
          captchaRef.current.style.display = 'none';
      }  
        
      if( captchastatus && formStatus ){
        captchaRef.current.style.display = 'none';
      }

      if( captchastatus === false && formStatus === false ){
          captchaRef.current.style.display = 'none';
      }

    }, [formStatus,captchastatus]);

    
    const processCaptcha = (data) => {
      if(data === target){
        setvisibility('none')
        setStatus(true)
      }else{   
          setvisibility('block')
          setStatus(false)
      }
    }

return (

<div>

  <Fetcher validForm = {form} captchastatus = {captchastatus } />

  
  <div ref={captchaRef} className=" captchmb flex items-center m-auto w-2/5">
  <h2 className="text-2xl font-bold text-center text-gray-700 mb-1">Validación de seguridad (Captcha)</h2>
      <span className="m-2 flex bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">
          Por favor, seleccione la imagen que se más se asemeja a " {target.label} " <br></br>
      </span>

    

      <div className="flex flex-wrap justify-between border p-1 w-full">
          {captchaImgs.map((fila, rowIndex) => (
              <div className="border w-1/2 p-1" key={rowIndex}>
                <button onClick={() => processCaptcha(fila)}>
                    <Image src={fila.source} alt={`Imagen ${rowIndex}`} className="w-full h-full object-cover" />
                </button>
                
              </div>
          ))}
      </div>

      <span style={{display:visibility}} className="m-2 bg-red-100 text-red-100 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-red-100">
      La imagen seleccionada es incorrecta, por favor seleccione la imagen mas parecida a "" {target.label} "" </span>

      
  </div>

</div>

)}
