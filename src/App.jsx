import { useEffect } from "react";
import Nav from "./pages/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";

const App = () => {

const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asyncCurrentUser());
  },[]);

  return (
    <>
    <Nav/>
    <MainRoutes/>
    </>
  )
}

export default App