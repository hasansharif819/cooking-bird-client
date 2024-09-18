import { Link } from "react-router-dom";
import useMenu from "../../CustomHooks/useMenu";
import SectionTtle from "../../components/SectionTitle/SectionTtle";
import MenuCard from "../../shared/MenuCard/MenuCard";

const PopularMenu = () => {

  const [menu] = useMenu()
  const popularItem = menu.filter(item => item.isPopular === true);

  return (
    <section className="container">
      <SectionTtle
        subHeading={"Check it out"}
        heading={"popular menu"}
      >
      </SectionTtle>
      <div className="grid md:grid-cols-2 gap-6">
        {
          popularItem.slice(0, 6).map(item => (
            <MenuCard
              item={item}
              key={item._id}
            />
          ))
        }

      </div>
      <Link to='/popular-menu' className="flex justify-center">
        <button className="btn btn-outline text-white border-0 border-b-4  text-black">View All</button>
      </Link>

    </section>
  );
};

export default PopularMenu;