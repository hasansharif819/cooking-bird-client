import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://website-of-restaurant-server.vercel.app'
    baseURL:'https://cooking-bird-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
