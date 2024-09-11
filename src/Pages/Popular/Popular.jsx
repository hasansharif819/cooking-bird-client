import useMenu from "../../CustomHooks/useMenu";
import SectionTtle from "../../components/SectionTitle/SectionTtle";
import MenuCard from "../../shared/MenuCard/MenuCard";

const PopularMenu = () => {

  const [menu] = useMenu()
  const popularItem = menu.filter(item => item.category === "popular");

  return (
    <section className="container">
      <SectionTtle
        subHeading={"Check it out"}
        heading={"popular menu"}
      >
      </SectionTtle>
      <div className="grid md:grid-cols-2 gap-6">
        {
          popularItem.map(item => <MenuCard
            item={item}
            key={item._id}
          ></MenuCard>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;