

'use client'

import { useRef, useState , useEffect} from "react";
import Loader from "../../../../public/images/spinner.gif"
import Image from "next/image";

export default function Fetcher(props) {

    const { validForm, captchastatus} = props;

    
    const fetcherRef = useRef(null);

     useEffect(() => {

    if(captchastatus === true){

        fetcherRef.current.style.display = 'block';


      }else{
        fetcherRef.current.style.display = 'none';
      }
     
    }, [captchastatus]);

return (
  
    <div ref={fetcherRef} >
        <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    </div>
   

)}
