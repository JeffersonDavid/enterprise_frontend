

'use client'

import { useRef, useState , useEffect} from "react";
import React from "react";
import Image from "next/image";
import C1image from '../../../../public/images/perro.jpg'
import C2image from '../../../../public/images/barco.jpg'
import C3image from '../../../../public/images/silueta.jpg'
import C4image from '../../../../public/images/señal.jpg'


export default function Captcha({form}) {

    const [captchastatus, setStatus] = useState(false);

    const captchaRef = useRef(null);

    const [captchaImgs, setcaptchaImgs] = useState([
        C1image,
        C2image,
        C3image,
        C4image
    ]);
  
    //const [target, setTarget] = useState( captchaImgs[Math.floor(Math.random() * captchaImgs.length)] );

    useEffect(() => {
    setStatus(form.st)
    console.log('status')
    console.log(captchastatus)
      
      if(form.st===true){
        captchaRef.current.style.display = 'block';
      }else{
        captchaRef.current.style.display = 'none';
      }

     
    }, [form.st]);
  







return (
<div ref={captchaRef}>  
    <div>
      <h1>Galería de Imágenes (2x2)</h1>
      <div className="grid grid-cols-2 gap-4">
        {captchaImgs.map((fila, rowIndex) => (
          <div key={rowIndex} className="flex">
         
              <div key={rowIndex} className="w-full">
                <Image src={fila}/>
              </div>
         
          </div>
        ))}
      </div>
    </div>
</div>

)}
