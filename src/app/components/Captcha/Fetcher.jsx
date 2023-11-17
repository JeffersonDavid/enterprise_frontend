

'use client'

import { useRef, useState , useEffect} from "react";
import Loader from "../../../../public/images/spinner.gif"
import Image from "next/image";
import Link from "next/link";

export default function Fetcher(props) {

    const { validForm, captchastatus} = props;
    const [requestError, setrequestError] = useState(false)

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

    
       console.log('---------- auth from backend ------------')
       console.log(token)
        
        try {

              const response = await fetch(url, requestOptions);
              if (!response.ok) {
                throw new Error('Step 1 - Error en la solicitud del fetcher : ' + JSON.stringify(response));
              }
              
              console.log(response)
              const responseData = await response.json();
              console.log('Respuesta recibida de backend:', responseData);

        } catch (error) {

              console.error('Api error detected in front (sending server form data ):', error.message);
              setrequestError(true)
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
              throw new Error('Step 3 - Error en la solicitud : ' + JSON.stringify(errorResponse));
            }      

            const responseData = await response.json();
            console.log('Respuesta AUTH:', responseData);

            return responseData.token;

      } catch (error) {

            console.error('Api error detected in front (getting token auth from api ):', error.message);
            setrequestError(true)
      }
    }






return (
  


    <div className="mbfetcher" ref={fetcherRef} >

      {!requestError ? (

          <div className="flex justify-center items-center mt-10">
            <div className="mbfetcher animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            <span className="absolute">Enviando datos... por favor espere</span>
          </div>

           ) : <div className="block justify-center items-center p-3">
                     <span>Upps :( ! Esto no debería ocurrir, se ha producido un error en la solicitud web, para reportar un porblema por favor contacte con adminsitrador al siguiente correo:</span>
                    <br></br>
                     <a href="mailto:pitasol.sl@hotmail.com" className="text-blue-500 hover:underline">pitasol.sl@hotmail.com</a>

                     <br></br>
                     <Link href="/" className=" ml-2 text-xs text-blue-600 dark:text-blue-500 hover:underline">  {'<<<<'}  volver atrás </Link>
              </div>
      }
       
    </div>
   

)}
