import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
// import OrderImg from '../../assets/shop/banner2';


const MenuDetails = () => {
  const { id } = useParams()

  const [menuItem, setMenuItem] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("id = ", id)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`https://cooking-bird-server.vercel.app/menu/${id}`);
        setMenuItem(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log("menuItem == ", menuItem)

  return (
    <div>
      <Helmet>
        <title>Rooftop/Menu-Details </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover img={menuItem?.image} title={menuItem?.name}></Cover>
      <div className="container mx-auto my-12 p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
          {/* Left Side: Image */}
          <div className="flex-shrink-0">
            <img
              src={menuItem?.image}
              alt={menuItem?.name}
              className="w-full lg:w-[400px] h-[300px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold uppercase text-gray-800">{menuItem?.name}</h1>
            <p className="text-gray-500 text-lg">{menuItem?.recipe}</p>

            <div className="text-gray-700 text-sm">
              <p>{menuItem?.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold text-yellow-500">${menuItem?.price}</span>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-600 transition-all">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetails;