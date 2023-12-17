'use client'
import FormComponent from "../components/Form/Form"
import { Suspense } from 'react'

export default function contactPage() {


  const formData = {
    form_target: 'http://localhost:8080/api/v1/orders',
    form_method: 'POST',
    form_title: 'Formulario de contacto',
    form_fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Nombre y apellidos',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        label: 'Correo Electrónico',
        required: true,
      },
      {
        name: 'phone',
        type: 'phone',
        label: 'Teléfono',
        required: true,
      },
      {
        name: 'msg',
        type: 'text_area',
        label: 'Mensaje (opcional)',
        placeholder : "Escribe tu mensaje aquí...",
        required: false,
      }
    ],
  };


  
  return (
    <div className='product-box secure-container flex justify-center items-center' > 
          <FormComponent data={formData} />
    </div>)


}
  