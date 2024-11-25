
import { useQuery } from "@tanstack/react-query";
import {  fetchRecordsLis, getSingleRecord } from "../service";

const useFetchSingleUrl = (id:string) => { 
  
    const {
      isLoading:isLoadingSingle, 
      data: singleUrl, 
      refetch:refetchSingle,
    } = useQuery(
      ['URL_FETCHED_LIST'],
      () => getSingleRecord(id), 
      {
        enabled: false,
        refetchOnWindowFocus: false,
    },
    );
  
    return {
        isLoadingSingle,
        singleUrl,
        refetchSingle ,
    };
  };
  
  export default useFetchSingleUrl;