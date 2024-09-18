import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import OrderImg from '../../assets/shop/banner2.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log("User profile = ", user)

  return (
    <div>
      <Helmet>
        <title>Rooftop/profile </title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      {
        !user ? <>
          <Cover img={OrderImg} title="profile"></Cover>
        </>
          :
          <>
            <Cover img={user.photoURL} title={user.displayName}></Cover>
          </>
      }


      <p>{user?.displayName}</p>
    </div>
  );
};

export default Profile;