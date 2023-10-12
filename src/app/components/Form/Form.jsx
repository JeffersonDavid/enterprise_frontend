'use client'

import React, { useState,useEffect,useRef } from 'react';
import Captcha from '../Captcha/Captcha';
import dataset from '../Product/data';


const submit_id = 'submit_input'

export default function CustomForm(inputs) {

    const [activeCaptcha, setactiveCaptcha] = useState(false);
    const valiadtionRef = useRef(null);
    const formRef = useRef(null);
    const [valiadtionMsg, setvaliadtionMsg] = useState('');
    const [inputDataset, setinputDataset] = useState([]);

    const [formStatus, setformStatus] = useState(false); 

    const defineInputType = (item) => {
        let type = item.type
        let input_class = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      
        switch (type) {
            case 'number':
              return (
                <input
                  id={item.name}
                  className={input_class}
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                />
              );
            case 'select':
              return (
                <select className={input_class} id={item.name}>
                  { item.options.map((item, index) =>(
                    <option value={item} selected>{item}</option>
                  ))}
                </select>
              );
            default:
              return (
                <input
                  className={input_class}
                  name={item.name}
                  id={item.name}
                  type={item.type}
                  placeholder={item.label}
                />
              );
          }
    };



    const submitForm = (ev) => {
        let dataset = [];
        dataset.fields = [];
        dataset.target = inputs.data.form_target;
        dataset.method = inputs.data.form_method;

        ev.preventDefault();
        inputs.data.form_fields.forEach(element => {
                let input = document.getElementById(`${element.name}`);   
                if(input != null && input != undefined){
                    if(element.required === true ){
                        dataset.push({ name:element.name , value: input.value, label:element.label })
                        let dynamicField = {};
                        dynamicField[element.name] = input.value;
                        dataset.fields.push(dynamicField);
                    }
                }
            
        });
       
        const has_empty_inputs = dataset.filter(item => item.value === '' || item.value === null);
        if ((has_empty_inputs.length) > 0) {

            const namesString = has_empty_inputs.map(item => item.label).join(', ');
            setvaliadtionMsg(namesString)
            valiadtionRef.current.style.display = 'block'

        }else{

            setinputDataset(dataset)
            setvaliadtionMsg('')
            valiadtionRef.current.style.display = 'none'
            setactiveCaptcha(true)
            
        }
    };
 
    useEffect(() => { 

        if(activeCaptcha){
            setformStatus(true);
            inputDataset.st = true
            setinputDataset(inputDataset);
            formRef.current.style.display ='none'

        }else{
          
            inputDataset.st = false
            formRef.current.style.display ='block'
            setinputDataset(inputDataset);
        }
    }, [activeCaptcha,formStatus]);


    return (
    <div className='w-full flex justify-center'>
    <Captcha form ={inputDataset} formStatus={formStatus} />

    <form ref={formRef} className="mwcustom bg-white w-full shadow-md rounded px-8 pt-2 pb-2 mb-1">
            <p className='m-3 block text-gray font-bold'> {inputs.data.form_title} </p>
            {
                    inputs.data.form_fields.map((item, index) =>(

                    <div className="mb-2 flex" key = {index} >
                        { item.type != submit_id ?  <label className="clabel block text-gray-700 text-sm font-bold mb-2">{item.label}</label> : null }
                        {defineInputType(item)}
                    </div>
            ))}

                    <div className='flex'>
                        <button  onClick={e => submitForm(e)} name='submit' id='submit_btn' type='submit' className="btnbcolor inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Enviar</button>

                        <span ref={valiadtionRef} className="valiadtionRef ml-5 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Por favor, rellene los campos: {valiadtionMsg}</span>
                    </div>
    </form>

    </div>

)}


