

'use client'

import { useRef, useState , useEffect} from "react";
import Loader from "../../../../public/images/spinner.gif"
import Image from "next/image";

export default function Fetcher({validForm}) {

    console.log('fetcher conectado?')
    console.log(validForm)

    
    const fetcherRef = useRef(null);

    useEffect(() => {
    if(validForm.captcha === true){
        fetcherRef.current.style.display = 'block';
      }else{
        fetcherRef.current.style.display = 'none';
      }
     
    }, [validForm.captcha]);

return (
  
    <div ref={fetcherRef} >
        <div class="flex justify-center items-center mt-10">
            <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    </div>
   

)}
