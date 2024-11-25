import { useState } from "react";
import AppLayout from "../../layout/appLayout";
import UserInputMask from "../../components/userInputMask";
import AdminOverView from "../../components/adminOverView";

const Home = () => {
  const [isAdmin, setIsAdmin] = useState<string>("inputMask");
  return (
    <AppLayout isAdmin={isAdmin} setIsAdmin={setIsAdmin}>
      {isAdmin === "inputMask" ? <UserInputMask /> : <AdminOverView />}
    </AppLayout>
  );
};
export default Home;
