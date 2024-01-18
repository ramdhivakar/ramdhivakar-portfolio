/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { BsArrowRight } from 'react-icons/bs';
import Bot from '../../components/Avatar';
import Circles from '/components/Circles';
import { fadeIn } from '../../variants';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get values from form inputs
    const form = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      subject: e.target.elements.subject.value,
      message: e.target.elements.message.value,
    };

    // Handle form submission logic using emailjs
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully', response);
      // Handle additional success logic here
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle additional error logic here
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] '>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='name' className='input' />
              <input type='text' name='email' placeholder='email' className='input' />
            </div>
            <input type='text' name='subject' placeholder='subject' className='input' />
            <textarea name='message' placeholder='message' className='textarea'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center
           justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300'>Let's talks</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
        <Bot />
      </motion.div>
      <Circles />
    </div>
  );
};

export default Contact;
