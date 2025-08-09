import React from 'react'

const Button = (props) => {
  return (
    // esssa ...props esta puxando todas as propriedades do componente inclusive a função de clicar onclick
    <button  {...props} className='bg-slate-400  text-white p-2 rounded-md'>
   
    </button>
  )
}

export default Button
