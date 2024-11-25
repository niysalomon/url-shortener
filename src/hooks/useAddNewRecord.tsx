import { useMutation } from "@tanstack/react-query";
import {  saveUrl } from "../service";
import { useState } from "react";

const Useurls = () => {
  const [url, setUrl] = useState<string>("");
  const [ttlInSeconds, setTtlInSeconds] = useState<number>(0);
  const [message,setMessage] = useState<string>("");
  const [messaType,setMessaType]= useState<string>("");
  const {
    data: mutationResponse,
    mutate: mutateAdd,
    isLoading: isApproveLoading,
  } = useMutation(["APPROVE_DOC"], () => saveUrl(url, ttlInSeconds), {
    onError: (error: {
      response: { data: { message: string; status: string } };
    }) => {
      alert(error);
    },
    onSuccess: (data) => {
      alert("done");

      setTimeout(() => {
        // router.reload();
      }, 100);
    },
  });
  const registerNewUrl = () => {
    mutateAdd();
  };

  console.log("url==",url);
  console.log("ttlInSeconds==",ttlInSeconds);
  return {
    registerNewUrl,
    ttlInSeconds,
    setTtlInSeconds,
    url,
    setUrl,
    message,setMessage,
    messaType,setMessaType
  };
};
export default Useurls;

// const useAddNewRecord = (
//     url: string,
//     ttlInSeconds:number
// ) => {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['URL_FETCHED_LIST'],
//     queryFn: () => SaveNewRecord({
//         url,ttlInSeconds
//     }),
//   });
//   return {
//     data,
//     isLoading,
//     isError,
//   };
// };

// export default useAddNewRecord;
