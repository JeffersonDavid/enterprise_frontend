import { useState, useEffect } from "react";
import { PopUpInfoContract } from "../contracts/popUpContract";


export default function Product({ data }: { data: PopUpInfoContract }) {

    const [show, setShow] = useState(data.status);

    useEffect(() => {
        setShow(data.status);
      }, [data]);

    

return (

<div style={{ display: show ? 'block' : 'none' }}>

    <div  className='absolute w-full h-full z-999999 bg-black bg-opacity-50' >
    <div id="popup-container" className="fixed rounded-[10px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white border border-gray-300 shadow-md z-50">
        <button id="btn-cerrar" className="absolute top-0 right-0 mt-[-10px] mr-[-10px] p-1 bg-red-700 rounded-full hover:bg-red-400 focus:outline-none" onClick={()=>setShow(false)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" className="stroke-current" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-6 6M9 9l6 6" />
            </svg>
        </button>
        <div className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 rounded-md" role="alert">
            <p className="font-semibold text-lg mb-2">{data.title}</p>
            <p className="text-sm leading-5"> {data.content} </p>
            <button className="mt-4 bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-400 focus:outline-none" onClick={()=>setShow(false)}>Aceptar</button>
        </div>
    </div>
    </div>
</div>
)

}