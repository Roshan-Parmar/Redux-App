import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncProductStore} from "./store/actions/productAction";
import { asyncCurrentUser } from "./store/actions/userAction";

const App = () => {

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(asyncCurrentUser());
    dispatch(asyncProductStore());
},[]);

  return (
    <>
    <Nav/>
    <MainRoutes/>
    </>
  )
}

export default App