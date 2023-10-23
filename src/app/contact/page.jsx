'use client'
import FormComponent from "../components/Form/Form"

export default function contactPage() {


  const formData = {
    form_target: '/submit',
    form_method: 'POST',
    form_title: 'Mi formulario de ejemplo',
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
        type: 'text',
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
  