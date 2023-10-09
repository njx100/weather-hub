import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WeatherPage from "./pages/WeatherPage";
import NewsPage from "./pages/NewsPage";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PageNotFound from "./pages/PageNotFound";
function App() {
  const [dataAccount, setDataAccount] = useState([]);
  const urllink = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get(urllink);
      setDataAccount(response.data);
    };
    fetchTodo();
  }, []);

  const addUserAccount = (account) => {
    setDataAccount((pre) => [...pre, account]);
    axios.post(urllink, account).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<LoginPage dataAccount={dataAccount} />}
        />
        <Route
          path="/signup"
          element={
            <SignupPage
              addUserAccount={addUserAccount}
              dataAccount={dataAccount}
            />
          }
        />
        <Route path="/" exact element={<WeatherPage />} />
        <Route path="/news" element={<NewsPage />} />

        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
