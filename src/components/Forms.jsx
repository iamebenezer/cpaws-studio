import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Forms() {
  const [state, handleSubmit] = useForm("mkgnrvoj");
  if (state.succeeded) {
      return <p className='font-pop uppercase text-center my-4'>Thank You For Contacting Cpaws Studio!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center flex-col'>
      <label htmlFor="email" className='font-pop mr-1'>
        Email Address
      </label>
      <input
      className='border-[0.6px] border-blue-500 py-1 outline-none px-3 rounded-lg'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label htmlFor="email" className='font-pop mr-1'>
       Message
      </label>
      <textarea
      className='border-[0.6px] border-blue-500 py-1 outline-none px-3 rounded-lg'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='my-3 bg-gradient-to-r font-nukshock from-[#0564F1]
                   to-[#002B6B] hover:transition-all hover:bg-gradient-to-r hover:from-[#002B6B]
                   hover:to-[#0564F1] ease-linear duration-100 shadow-sm text-white px-6 py-2 rounded-xl w-fit shadow-[#476796]' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Forms;