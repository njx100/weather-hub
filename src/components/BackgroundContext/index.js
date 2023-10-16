import { createContext } from "react";

const defaultValue = {
  background: "weather-page-blue-mountain",
};
const BackgroundContext = createContext(defaultValue);

export default BackgroundContext;
