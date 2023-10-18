import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WeatherPage from "./pages/WeatherPage";
import NewsPage from "./pages/NewsPage";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./pages/PageNotFound";
import BackgroundContext from "./components/BackgroundContext";
import AboutPage from "./pages/AboutPage";

function App() {
  const [dataAccount, setdataAccount] = useState([]);
  const [background, setBackground] = useState(
    "https://i.imgur.com/hW4qLSe.jpg"
  );
  const urlInfoUserName = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";

  const checkSessionStorage = () => {
    if (!sessionStorage.getItem("id") && !sessionStorage.getItem("username")) {
      sessionStorage.setItem("id", "1");
      sessionStorage.setItem("username", "Guest");
    }
  };

  const getUserInfo = async () => {
    const response = await axios.get(urlInfoUserName);
    setdataAccount(response.data);
  };

  useEffect(() => {
    checkSessionStorage();
    getUserInfo();
  }, []);

  const addUserAccount = (account) => {
    setdataAccount((pre) => [...pre, account]);
    axios.post(urlInfoUserName, account);
  };

  return (
    <BackgroundContext.Provider
      value={{ background: background, setBackground: setBackground }}
    >
      <div className="App">
        <Routes>
          <Route
            path="login"
            element={
              <LoginPage dataAccount={dataAccount} getUserInfo={getUserInfo} />
            }
          />
          <Route
            path="signup"
            element={
              <SignupPage
                addUserAccount={addUserAccount}
                dataAccount={dataAccount}
              />
            }
          />
          <Route path="" exact element={<WeatherPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BackgroundContext.Provider>
  );
}

export default App;
