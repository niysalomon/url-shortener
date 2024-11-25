import { useTranslation } from "react-i18next";

export const convertStringToString=(dateString:string)=>{
    const localDate = new Date(dateString); 
    const formattedDate = localDate.toLocaleString();
    return formattedDate
}
export const stringToNumberFuntion = (str:string) => {
    const num = Number(str);
  
    if (isNaN(num)) {
      throw new Error(`Invalid number: ${str}`);
    }
  
    return num;
  };

//   const { t, i18n } = useTranslation();
//   export const handleLanguageChange = (lang: string) => {
//     i18n.changeLanguage(lang);
//   };