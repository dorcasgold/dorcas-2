import radio from '../assets//radio.gif'

function Contact() {
  return (
    <div>
      <div className='flex flex-col gap-8 my-10'>
        <div className="flex justify-center">
          <p className='text-xl font-semibold sm:text-5xl'>CONTACT</p>
          <div>
            <img className='w-11' src={radio} alt="radio-gif" />
          </div>
        </div>

        <div className="flex gap-5 justify-center mt-10">
          <div className='sm:mr-10'>
            <p className='text-xl font-bold sm:text-5xl'>Let&apos;s connect!</p>
            <p className='text-xl font-bold sm:text-2xl mt-3 '>Feel free to drop your details </p>
            <p className='text-xl font-bold sm:text-2xl mt-3 '>in the form</p>
            <p className='text-xl font-bold sm:text-2xl mt-3'>and let&apos;s work together ๑(◕‿◕)๑</p>
          </div>
          <form action="" method="post" className='flex flex-col gap-5'>
            <div>
              <input type="text" name="name" id="name" placeholder='Your Name' className='h-20 w-[310px] md:w-[450px] pl-5 outline-none border-white border-2 bg-transparent' />
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder='Your Email' className='h-20 w-[310px] md:w-[450px] pl-5 outline-none border-white border-2 bg-transparent' />
            </div>
            <div>
              <textarea name="Message" id="message" rows="5" placeholder='message' className='outline-none pl-5 pt-4  w-[310px] md:w-[450px] border-white border-2 bg-transparent'></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact