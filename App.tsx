import { Home } from "./src/screens/home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="light" translucent />
    </>
  );
}
