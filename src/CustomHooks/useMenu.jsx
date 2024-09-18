import { useEffect, useState } from "react";
import axios from "axios";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('https://cooking-bird-server.vercel.app/menu');
                // console.log("res = ", response);
                setMenu(response.data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return [menu, loading];
};

export default useMenu;
