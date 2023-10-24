

'use client'

import { useRef, useState , useEffect} from "react";
import Loader from "../../../../public/images/spinner.gif"
import Image from "next/image";

export default function Fetcher(props) {
    const { validForm, captchastatus} = props;

    console.log('validForm new fields')
    console.log(validForm)

    const fetcherRef = useRef(null);

    useEffect(() => {

    if(captchastatus === true){
        fetcherRef.current.style.display = 'block';
        console.log('fetching data....')
        fetchData();
        console.log('data fetched....')
        
      }else{


        fetcherRef.current.style.display = 'none';


      }
     
    }, [captchastatus]);


    async function fetchData() {

        const token = `Bearer ${await fetchAuth()}`;
        const url = validForm.target;
        const data =(validForm.fields)
        const requestOptions = {
          method: validForm.method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(data)
        };

       // console.log('request options')
       // console.log(requestOptions)
       console.log('---------- auth from backend ------------')
       console.log(token)
        
        try {

              const response = await fetch(url, requestOptions);
              if (!response.ok) {
                throw new Error('- Error en la solicitud: ' + JSON.stringify(response));
              }
              
              console.log(response)
              const responseData = await response.json();
              console.log('Respuesta recibida de backend:', responseData);

        } catch (error) {
              console.error('Error:', error.message);
        }
    }


    async function fetchAuth() {
      const url = 'api/leadsauth';
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json','Authorization': 'inTheNameOfLove'},
        body: null
      };
      
      try {

            const response = await fetch(url, requestOptions);
            if (!response.ok) {
              throw new Error(' - Error en la solicitud : ' + JSON.stringify(errorResponse));

            }      
            const responseData = await response.json();
            console.log('Respuesta AUTH:', responseData);

            return responseData.token;

      } catch (error) {

            console.error('Error AUTH:', error.message);
      }
    }






return (
  
    <div ref={fetcherRef} >
        <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    </div>
   

)}
