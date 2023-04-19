import HomeScreen from "./home/HomeScreen";
import DekstopLayout from "../components/layout/DekstopLayout";
import SelectionScreen from "./selection/SelectionScreen";
import RecommendationLoadingScreen from "./selection/RecommendationLoadingScreen";

export const Home = <DekstopLayout content={<HomeScreen/>}/>
export const Selection = <DekstopLayout content={<SelectionScreen/>}/>
export const RecommendationLoading = <DekstopLayout content={<RecommendationLoadingScreen/>}/>
