import { useState } from 'react'
import radio from '../assets//radio.gif'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Please enter your name !'
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Please enter your Email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address."
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Please enter a message.'
    }

    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // Submit form if valid
      e.target.submit();
    }
  }

  return (
    <div>
      <div className='flex flex-col gap-8 my-10'>
        <div className="flex justify-center">
          <p className='text-xl font-semibold sm:text-5xl'>CONTACT</p>
          <div>
            <img className='w-11' src={radio} alt="radio-gif" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-3">
          <div className='sm:mr-10'>
            <p className='text-xl font-bold sm:text-5xl'>Let&apos;s connect!</p>
            <p className='text-xl font-bold sm:text-2xl mt-3 '>Feel free to drop your details </p>
            <p className='text-xl font-bold sm:text-2xl mt-3 '>in the form</p>
            <p className='text-xl font-bold sm:text-2xl mt-3'>and let&apos;s work together ๑(◕‿◕)๑</p>
          </div>
          <form onSubmit={handleSubmit} action="https://getform.io/f/panvrera" method="post" className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <input onChange={handleChange} type="text" name="name" id="name" placeholder='Your Name' className='h-20 w-[310px] md:w-[450px] pl-5 outline-none border-white border-2 bg-transparent' />
              {errors.name && <span className="text-red-500 mt-3  font-bold ">{errors.name}</span>}
            </div>
            <div className='flex flex-col'>
              <input onChange={handleChange} type="email" name="email" id="email" placeholder='Your Email' className='h-20 w-[310px] md:w-[450px] pl-5 outline-none border-white border-2 bg-transparent' />
              {errors.email && <span className="text-red-500 mt-3  font-bold">{errors.email}</span>}
            </div>
            <div className='flex flex-col'>
              <input type="hidden" name="_gotcha" className='hidden !important' />
              <textarea onChange={handleChange} name="message" id="message" rows="5" placeholder='message' className='outline-none pl-5 pt-4  w-[310px] md:w-[450px] border-white border-2 bg-transparent'></textarea>
              {errors.message && <span className="text-red-500 mt-3  font-bold">{errors.message}</span>}
            </div>
            <div>
              <button type="submit" className='bg-stone-300 text-pink-950 py-3 px-5 rounded-lg font-medium cursor-pointer transition-all duration-300 ease-in hover:rounded-sm hover:bg-pink-950 hover:text-stone-300'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact