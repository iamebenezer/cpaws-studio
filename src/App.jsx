import './App.css'
import mainLogo from "./assets/images/logo.png"
import { FiChevronDown } from "react-icons/fi";
import Accordion from './components/accordion';
import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Forms from './components/Forms';
import { TbBrandTelegram } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";


function App() {
  
  
  return (
      <div className='bg-[url("./assets/images/bg-one.png")] bg-no-repeat h-screen w-screen'>
       
            <nav className='md:mx-6 border-b-2 md:flex justify-center p-6 md:justify-between md:items-center'>
                <div className='flex text-start space-x-2 justify-center items-center floating'>
                    <img src={mainLogo} className='h-8 flex justify-center items-center' alt="" /> 
                    <span className='font-nukshock text-md'>   Cpaw's Studio </span>
                </div>
                <div>
                  <ul className='hidden text-black md:text-lg font-nukshock md:flex space-x-6'>
                <a href="/">
                    <li className='relative hover:-translate-y-2 transition duration-300 hover:text-blue-700 after:absolute after:left-0 after:bottom-0
                     after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100'>Home</li>
                     </a>
                  <a href="#about">  <li className='relative hover:-translate-y-2 transition duration-300 hover:text-blue-700 after:absolute after:left-0 after:bottom-0
                     after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100'>About</li>
               </a>
               <a href="#services">
                    <li className='relative hover:-translate-y-2 transition duration-300 hover:text-blue-700 after:absolute after:left-0 after:bottom-0
                     after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left hover:after:scale-x-100'>Services</li>
                    </a>

                  </ul>
                </div>
                <div>
                  <a href="#contact" className="hidden md:inline-flex p-3 rounded-3xl text-white font-nukshock items-center  md:text-md 
                  bg-gradient-to-r from-[#0564F1]
                   to-[#002B6B] hover:transition-all hover:bg-gradient-to-r hover:from-[#002B6B]
                   hover:to-[#0564F1] ease-linear duration-700 shadow-md shadow-[#476796]">Get in touch 

            
                  </a>
                </div>
            </nav>
            <main className='snap-container'>
            {/* Hero */}
            <section className='min-h-screen snap-start mx-3 flex flex-col justify-center md:mx-6 items-center'>
  <div className='flex flex-col justify-center items-center space-y-4 my-auto text-center md:py-40'>
    <h1 className='font-nukshock text-3xl md:text-5xl bg-gradient-to-r from-[#0564F1]
     to-[#002B6B] text-transparent bg-clip-text'>
      Empowering Brands Through <br /> Creative Innovation.
    </h1>
    <p className='font-pop px-2 uppercase text-md md:text-base'>
      Striving in building lasting relationships, fostering innovation,  
      and driving growth through our expertise and passion.
    </p>
    <a
      href="#contact"
      className='bg-gradient-to-r animate-pulse font-nukshock from-[#0564F1] to-[#002B6B] hover:transition-all hover:bg-gradient-to-r hover:from-[#002B6B] hover:to-[#0564F1] ease-linear duration-700 shadow-sm text-white px-6 py-3 rounded-xl w-fit shadow-[#476796]'
    >
      Get in Touch
    </a>


    <Marquee> 
    <h1 className="font-nukshock text-black">- Creativity - Innovation - Teamwork - Quality - Customer Satisfaction - Integrity - Adaptability</h1> 
      
    </Marquee>
    {/* <div className="overflow-hidden whitespace-nowrap">
  <div className="flex gap-x-3 animate-marquee">

    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Creativity</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Innovation</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Quality</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Customer Satisfaction</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Teamwork</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Integrity</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Adaptability</h1>
    </div>

  
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Creativity</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Innovation</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Quality</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Customer Satisfaction</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Teamwork</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Integrity</h1>
    </div>
    <div className="bg-white/30 backdrop-blur-md border border-[#d0d0ff]/50 rounded-xl px-4 py-2 text-center shadow-lg">
      <h1 className="font-nukshock text-black">Adaptability</h1>
    </div>
  </div>
</div> */}


    <FiChevronDown size={30} className='animate-ping' href='#about' />
  </div>
</section>


          <section className='md:mx-9  snap-start p-8' id='about'>
            <div className='text-center'>
            <h1 className="md:text-2xl
                          bg-gradient-to-r from-[#0564F1]
                   to-[#002B6B] text-transparent text-4xl bg-clip-text font-nukshock
                        ">ABOUT</h1>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2 place-content-center items-center'>
                      <div>
                        {/* <span className='font-pop md:text-lg'></span>
                          <h1 className='md:text-2xl
                          bg-gradient-to-r from-[#0564F1]
                   to-[#002B6B] text-transparent bg-clip-text font-nukshock
                        '>
                       About
                          </h1> */}
                          <img src={mainLogo} className='floating' alt="" />
                      </div>
                      <div>
                          <p className='font-pop uppercase text-center md:text-start md:text-lg my-6'>
                          Cpaws Studio is committed to delivering cutting-edge digital solutions, empowering businesses and individuals to succeed in the ever-evolving technology landscape. 
                          We strive to build lasting relationships, foster innovation, and drive growth through our expertise and passion.
                          </p>
                          <div className="flex justify-center md:justify-start">
                          <a href="#contact" className='bg-gradient-to-r font-nukshock from-[#0564F1]
                   to-[#002B6B] hover:transition-all hover:bg-gradient-to-r hover:from-[#002B6B]
                   hover:to-[#0564F1] ease-linear duration-700 shadow-sm text-white px-6 py-3 rounded-xl w-fit shadow-[#476796]'>Get in Touch</a>
        </div>
                      </div>
                </div>
           

          </section>
          <section className='md:mx-9  snap-start p-8' id='services'>

          <div className='text-center'>
            <p className="text-center font-pop">TAKE A LOOK AT WHAT WE DO</p>
            <h1 className="md:text-2xl text-4xl
                          bg-gradient-to-r from-[#0564F1]
                   to-[#002B6B] text-transparent bg-clip-text font-nukshock
                        ">OUR SERVICES</h1>
            </div>
                            <Accordion/>

          </section>  
          <section className='md:mx-9 snap-start p-8' id='contact'>
          <div className='text-center'>
           
            <h1 className="md:text-2xl text-4xl
                          bg-gradient-to-r from-[#0564F1]
                   to-[#002B6B] text-transparent bg-clip-text font-nukshock
                        ">Contact Us</h1>
            </div>
                            <Forms/>
          

                            </section>
                          <footer className='text-white bg-[#0F2C5C] snap-start py-6 md:py-3'>
                            <div className="flex justify-center  my-4  items-center md:justify-between md:mx-8 mx-3">
                              <div className='flex space-y-1 flex-col items-center justify-center md:justify-start md:items-start'>
                                      <div>
                                        <h1 className='font-nukshock'>  CPAWS STUDIO</h1>
                                      </div>
                                         <div className='flex space-x-3 text-xl'> 
                                  <a href="https://instagram.com/cpaws.studio">
                                  <FaInstagram/>
                                    
                                  </a>

                                  <a href="https://t.me/coding_paw">
                                    <FaWhatsapp/>
                                  </a>
                                  <a href="">
                                    <TbBrandTelegram/>
                                  </a>
                                  <a href="mailto:codingpaw1@gmail.com">
                                    <MdOutlineEmail/>
                                  </a>
                                  </div>
                                      <div className='text-center md:text-start'>
                                       <p className='font-pop uppercase'>
                                       Empowering Brands Through
                                       Creative Innovation.
                                       </p>
                                      </div>
                                    
                              </div>
                              <div className='my-4'>
                                <ul className='space-x-5 hidden md:flex flex-col md:flex-row font-nukshock'>
                                  <a href="">HOME</a>
                                  <a href="#about">ABOUT</a>
                                  <a href="#services">SERVICES</a>
                                </ul>
                              </div>
                              <div className='hidden md:flex md:flex-col'>
                                <h1 className=' font-nukshock'>Socials</h1>
                                <div className='flex space-x-3 text-lg'> 
                                  <a href="https://instagram.com/cpaws.studio">
                                  <FaInstagram/>
                                    
                                  </a>

                                  <a href="">
                                    <FaWhatsapp/>
                                  </a>
                                  <a href="https://t.me/coding_paw">
                                    <TbBrandTelegram/>
                                  </a>
                                  <a href="mailto:codingpaw1@gmail.com">
                                    <MdOutlineEmail/>
                                  </a>
                                  </div>
                              </div>
                             
                            </div>
                            <div className="flex font-nukshock justify-center items-center">
                              <p className='text-xs'>2024 All Rights Reserved</p>
                              </div>
                          </footer>
          </main>

        </div>
 
  )
}

export default App
