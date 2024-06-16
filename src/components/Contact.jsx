import axios from "axios";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => 
    {
      const userInfo ={
        name:data.name,
        email:data.email,
        message:data.message,
      }
      try {
        await axios.post("https://getform.io/f/lakmlvla",userInfo);
        toast.success("Sandesh Chala Gaya Hai");
      } catch (error) {
        console.log(error);
        toast.error("Kuch Galat Ho Raha Hai");
      }
    }

  return (
    <>
      {/* Message Box */}
      <div 
        name="Contact" 
        className="max-w-screen-2xl container mx-auto px-2 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          
          
          <form 
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/lakmlvla" 
          // method="POST"
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            
            <h1 className="">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              {/* Name */}
              <label className="block text-gray-700">Full Name</label>
              <input 
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border px-4 py-2 leading-tight focus:outline-none focus:shadow-outline"
                id="name" 
                name="name"
                type="text" placeholder="Enter Your Full Name Bachha ✋" />
                {errors.name && <span>This field is required</span>}

            </div>
           
            <div className="flex flex-col mb-4">
              {/* Email  */}
              <label className="block text-gray-700">Email Address</label>
              <input 
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border px-4 py-2 leading-tight focus:outline-none focus:shadow-outline"
                id="name" 
                name="email"
                type="text" placeholder="Enter Your Email Address Bachha ✋" />
                {errors.email && <span>This field is required</span>}

            </div>
            <div className="flex flex-col mb-4">
              {/* Message */}
              <label className="block text-gray-700">Message</label>
              <textarea 
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border px-4 py-2 leading-tight focus:outline-none focus:shadow-outline"
                id="name" 
                name="message"
                type="text" placeholder="Aapna Sandesh Yaha Likho Bachha ✋" />
                {errors.message && <span>This field is required</span>}

            </div>
            {/* send button */}
            <button type="submit" className="bg-black text-white px-3 py-2 rounded-xl hover:bg-slate-600 duration-300">Send</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default Contact;