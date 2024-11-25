import { useQuery } from "@tanstack/react-query";
import {  fetchRecordsLis } from "../service";

const useFetchUls = () => { 
  
    const {
      isLoading,
      isFetching,
      data: urlList,
      error,
      refetch,
    } = useQuery(
      ['URL_FETCHED_LIST'],
      () => fetchRecordsLis(), 
    );
  
    return {
      urlList,
      error,
      isFetching,
      isLoading,
      refetch, 
    };
  };
  
  export default useFetchUls;