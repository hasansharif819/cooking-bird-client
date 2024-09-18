import { Helmet } from "react-helmet-async";
import useMenu from "../../CustomHooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCard from "../../shared/MenuCard/MenuCard";
import OrderImg from "../../assets/menu/pizza-bg.jpg"

const PopularMenuItems = () => {

  const [menu] = useMenu()
  const popularItem = menu.filter(item => item.isPopular === true);

  return (
    <section>
      <Helmet>
        <title>Rooftop/popular menu </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <Cover img={OrderImg} title="Popular Menu"></Cover>
      
      <div className="container">
      <div className="grid md:grid-cols-2 gap-6">
        {
          popularItem.map(item => <MenuCard
            item={item}
            key={item._id}
          ></MenuCard>)
        }
      </div>
      </div>
    </section>
  );
};

export default PopularMenuItems;