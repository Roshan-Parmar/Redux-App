import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";
import { asyncProductStore} from "./store/actions/productAction";

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