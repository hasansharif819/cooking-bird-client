import { useEffect, useState } from "react";
import axios from "axios";

const useSingleItemById = (id) => {
    const [menuItem, setMenuItem] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("id = ", id)

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get(`https://cooking-bird-server.vercel.app/menu/${id}`);
                // console.log("res = ", response);
                setMenuItem(response.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, [id]);

    return [menuItem, loading];
};

export default useSingleItemById;

