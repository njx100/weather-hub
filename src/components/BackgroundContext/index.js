import { createContext } from "react";

const defaultValue = {
  background: "blue-mountain",
};
const BackgroundContext = createContext(defaultValue);

export default BackgroundContext;
