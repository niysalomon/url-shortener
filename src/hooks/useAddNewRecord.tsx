import { useMutation } from "@tanstack/react-query";
import { deleteSingleRecord, saveUrl, updateExistingUrl } from "../service";
import { useState } from "react";

const Useurls = () => {
  const [url, setUrl] = useState<string>("");
  const [ttlInSeconds, setTtlInSeconds] = useState<number>(400);
  const [message, setMessage] = useState<string>("");
  const [messaType, setMessaType] = useState<string>("");
  const [idToRedirect, setIdToRedirect] = useState<string>("");
  const [urlToBeRedirected, setUrlToBeRedirected] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const {
    data: mutationResponse,
    mutate: mutateAdd,
    isLoading: loadingUrlToBeRedirected,
  } = useMutation(["URL_FETCHED_LIST"], () => saveUrl(url, ttlInSeconds), {
    onError: (error: {
      response: { data: { message: string; status: string } };
 
       
    }) => {
        setOpenAdd(false);
        setMessage("sorry! fail to delete please try again");
        setIsSuccess(true)
    },
    onSuccess: (data) => { 
      setOpenAdd(false);
      setIdToRedirect(data.data.id);
      setUrlToBeRedirected(`https://urlshortener.smef.io/${data.data.id}`);
       setMessage("The record added successful!");
        setIsSuccess(true)
    },
  });


  const {
    data: Response,
    mutate: mutateUpdate,
    isLoading: loadingUpdate,
  } = useMutation(["URL_FETCHED_LIST"], () => updateExistingUrl(idToRedirect,url, ttlInSeconds), {
    onError: (error: {
      response: { data: { message: string; status: string } };
 
       
    }) => {
        setOpenAdd(false);
        setMessage("sorry! fail to update please try again");
        setIsSuccess(true)
    },
    onSuccess: (data) => { 
      // localStorage.setItem("id", idToRedirect);
      setOpenAdd(false);  
       setMessage("The record updated successful!");
        setIsSuccess(true)
    },
  }); 
  const {
    data: mutationDeleteResponse,
    mutate: mutateDelete,
    isLoading: loadingAfterDelete,
  } = useMutation(["URL_FETCHED_LIST"], () => deleteSingleRecord(idToRedirect), {
    onError: (error: {
      response: { data: { message: string; status: string } };
    }) => {
        setOpenDelete(false)
        setMessage("sorry! fail to delete please try again");
        setIsSuccess(true)
      alert(error);
    },
    onSuccess: (data) => {
        setMessage("The record deleted successful!");
        setIsSuccess(true);
        setOpenDelete(false) 
      setUrlToBeRedirected(`https://urlshortener.smef.io/${data.data.id}`);

      setTimeout(() => {
        // router.reload();
      }, 100);
    },
  });

  const registerNewUrl = () => {
    mutateAdd();
  };
  const deleteRecord = () => {
    mutateDelete();
  };
 
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
    setIdToRedirect,
    deleteRecord,
    isSuccess,
    setIsSuccess,
    openDelete, setOpenDelete,
    openAdd, setOpenAdd,
    mutateUpdate,
  };
};
export default Useurls;

 
