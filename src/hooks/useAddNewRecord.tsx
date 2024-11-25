import { useMutation } from "@tanstack/react-query";
import { saveUrl } from "../service";
import { useState } from "react";

const Useurls = () => {
  const [url, setUrl] = useState<string>("");
  const [ttlInSeconds, setTtlInSeconds] = useState<number>(400);
  const [message, setMessage] = useState<string>("");
  const [messaType, setMessaType] = useState<string>("");
  const [idToRedirect, setIdToRedirect] = useState<string>("");
  const [urlToBeRedirected, setUrlToBeRedirected] = useState<string>("");
  const {
    data: mutationResponse,
    mutate: mutateAdd,
    isLoading: loadingUrlToBeRedirected,
  } = useMutation(["NEW_RECORD"], () => saveUrl(url, ttlInSeconds), {
    onError: (error: {
      response: { data: { message: string; status: string } };
    }) => {
      alert(error);
    },
    onSuccess: (data) => { 
      console.log("====>", data);
      setIdToRedirect(data.data.id);
      setUrlToBeRedirected(`https://urlshortener.smef.io/${data.data.id}`);

      setTimeout(() => {
        // router.reload();
      }, 100);
    },
  });
  const registerNewUrl = () => {
    mutateAdd();
  };

  console.log("url==", url);
  console.log("ttlInSeconds==", ttlInSeconds);
  return {
    registerNewUrl,
    ttlInSeconds,
    setTtlInSeconds,
    url,
    setUrl,
    message,
    setMessage,
    messaType,
    setMessaType,
    idToRedirect,
    urlToBeRedirected,
    loadingUrlToBeRedirected,
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
