import HomeScreen from "./home/HomeScreen";
import DekstopLayout from "../components/layout/DekstopLayout";
import SelectionScreen from "./selection/SelectionScreen";

export const Home = <DekstopLayout content={<HomeScreen/>}/>
export const Selection = <DekstopLayout content={<SelectionScreen/>}/>