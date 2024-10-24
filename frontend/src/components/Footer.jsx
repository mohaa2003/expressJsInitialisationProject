import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap pt-20 px-10 pb-5 gap-8">
      <div className="lg:w-[20%] w-[100%] sm:w-[45%]">
        <h3 className="font-bold text-xl">Shoppee</h3>
      </div>
      <div className="lg:w-[20%] sm:w-[45%] w-[100%]">
        <h3 className="font-bold text-xl">Learn More</h3>
        <ul>
          <li>About Us</li>
          <li>Caegories</li>
          <li>Exchange Policy</li>
          <li>Order now</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="lg:w-[20%] sm:w-[45%] w-[100%]">
        <h3 className="font-bold text-xl">Our Comunity</h3>
        <ul>
          <li>Terms And Conditions</li>
          <li>Special Offers</li>
          <li>Customers Reviews</li>
        </ul>
      </div>
      <div className="lg:w-[25%] sm:w-[45%] w-[100%]">
        <h3 className="font-bold text-xl">Contact Us</h3>
        <ul>
          <li>Contact Number : 05534576857</li>
          <li>Mail Adress : abdousaid@gmail.com</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <FaFacebook size={20}/>
        <FaInstagramSquare size={20}/>
        <FaYoutube size={20}/>
        <FaTwitter size={20}/>
        <FaLinkedin size={20}/>
      </div>
    </footer>
  )
}

export default Footer