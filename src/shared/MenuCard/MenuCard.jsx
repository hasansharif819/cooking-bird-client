import { Link } from 'react-router-dom';

const MenuCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;

  return (
    <Link to={`/popular-menu/${_id}`} className="block transition-transform transform hover:scale-105">
      <div className="flex space-x-6 mb-10 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <img
          style={{ borderRadius: '0 200px 200px 200px' }}
          className="w-[100px] h-[100px] object-cover"
          src={image}
          alt={name}
        />
        <div className="flex-1 space-y-2">
          <h3 className="uppercase font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{recipe}</p>
        </div>
        <p className="text-yellow-500 font-semibold text-lg">${price}</p>
      </div>
    </Link>
  );
};

export default MenuCard;
