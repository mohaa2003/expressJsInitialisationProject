import "./home.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";

const Home = () => {
  return (
    <main className="w-full">
        <div className="w-2/3 md:w-1/2 p-8">
          <h2 className="text-[4rem] font-bold">Degital Shopping Hub Junction</h2>
          <p className="sm:w-[80%] my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis nisi corrupti id eveniet
            sit recusandae, consequuntur ipsam suscipit unde adipisci! Eius sed doloribus illum
            enim quaerat explicabo blanditiis et.
          </p>
          <div className="flex gap-3 items-center">
            <div className="stars flex gap-2">
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <span className="font-bold">198K</span>Excellent Rviews
          </div>
          <div className="my-8 flex gap-2">
            <button className="py-2 px-5 bg-black text-white rounded-[30px] font-semibold">Shop now</button>
            <button
              className="flex items-center gap-1 py-2 px-5 bg-white rounded-[30px] font-semibold">
              <MdOutlineSell/> Offers
            </button>
          </div>
        </div>
    </main>
  )
}

export default Home