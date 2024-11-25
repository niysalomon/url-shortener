import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      title: "Input Url",
      name: "Name",
      email: "Email",
      role: "Role",
      acceptTerms: "I accept the terms and conditions",
      submit: "Submit",
      selectRole: "Select a role",
      roles: {
        admin: "Admin",
        editor: "Editor",
        viewer: "Viewer",
      },
    },
  },
  de: {
    translation: {
      title: "Eingabe-URL",
      name: "Name",
      email: "E-Mail",
      role: "Rolle",
      acceptTerms: "Ich akzeptiere die Allgemeinen Geschäftsbedingungen",
      submit: "Einreichen",
      selectRole: "Wählen Sie eine Rolle aus",
      roles: {
        admin: "Administrator",
        editor: "Redakteur",
        viewer: "Betrachter",
      },
    },
  },
};
 
i18n
  .use(LanguageDetector) // Automatically detects user's language
  .use(initReactI18next) // Integrates with React
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;
