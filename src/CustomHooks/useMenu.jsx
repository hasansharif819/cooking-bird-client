// import {  useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";
import { useEffect, useState } from "react";


const useMenu = () => {  
    const [menu,setMenu] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect( ()=>{
        fetch('https://cooking-bird-server.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
             setMenu(data)
             setLoading(false)
        })
    }, [] )
    // const {data: menu =[], isPending : loading, refetch} =useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get('/menu')
    //         return res.data;
    //     }
    // })


    // return [menu,loading, refetch]
    return [menu,loading]
};

export default useMenu;



// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useMenu = () => {
//   const axiosPublic = useAxiosPublic();

//   const { data: menu, isLoading: loading, isError, error, refetch } = useQuery({
//     queryKey: ['menuItem'],
//     queryFn: async () => {
//       try {
//         const response = await axiosPublic.get(`/menu`);
//         return response.data;
//       } catch (err) {
//         console.error("Error fetching menu data:", err);
//         throw err;
//       }
//     },
//   });

//   return { menu, loading, isError, error, refetch };
// };

// export default useMenu;
