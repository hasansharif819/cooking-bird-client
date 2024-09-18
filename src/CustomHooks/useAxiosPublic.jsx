import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://website-of-restaurant-server.vercel.app'
    // baseURL:'https://cooking-bird-server.vercel.app'
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
