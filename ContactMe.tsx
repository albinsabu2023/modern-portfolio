import React from 'react'
import { EnvelopeIcon,  MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler,useForm } from 'react-hook-form';


type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;
};
type Props={

}


function ContactMe({}: Props) {
const { register, handleSubmit}= useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> =(formData)=>{
    window.location.href=`mailto:albinsullas13@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}.${formData.message}(
        ${formData.email}
    )`
}
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center
    '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className="flex flex-col space-y-10 mt-[40px]">
        
            <div className='mt-[70px] space-y-2 '>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-sm h-4 w-4 text-[#F7Ab0A] animate-pulse '/>
                        <p>+91 9544697960</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-sm h-4 w-4 text-[#F7Ab0A] animate-pulse '/>
                        <p>Pathanamthitta.Kerala.India</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-sm h-4 w-4 text-[#F7Ab0A] animate-pulse '/>
                        <p>albinsullas13@gmail.com</p>
                    </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>

                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text"/>
                    <input {...register('email')}placeholder='Email' className='contactInput'type="email"/>
                </div>
                <input {...register('subject')} placeholder="Subject" className='contactInput' type="text"/>
                <textarea  {...register('message')} placeholder="Message"  className='contactInput'/>
                <button type="submit" className='bg-[#F7AB0A]/70 hover:bg-[#F7AB0A] py-2    rounded-md text-black font-bold text-lg '>submit</button>
            </form>

        </div>
    </div>
  )
}

export default ContactMe