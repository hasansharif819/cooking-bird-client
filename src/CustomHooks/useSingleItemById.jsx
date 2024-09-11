import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useSingleItemById = (id) => {
  const axiosPublic = useAxiosPublic();
  
  const { data: menuItem, isLoading: loading, refetch } = useQuery({
    queryKey: ['menuItem', id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/menu/${id}`);
      console.log("res = ", response)
      return response.data;
    },
    enabled: !!id,
  });

  return { menuItem, loading, refetch };
};

export default useSingleItemById;
