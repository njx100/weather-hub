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
function App() {
  const [data_Account, setData_Account] = useState([]);
  const url_link = "https://6518f495818c4e98ac5ffd9f.mockapi.io/signup";
  const [userID, setUserID] = useState("0");

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get(url_link);
      setData_Account(response.data);
    };
    fetchTodo();
  }, []);

  const addUserAccount = (account) => {
    setData_Account((pre) => [...pre, account]);
    axios.post(url_link, account).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="login"
          element={
            <LoginPage data_Account={data_Account} setUserID={setUserID} />
          }
        />
        <Route
          path="signup"
          element={
            <SignupPage
              addUserAccount={addUserAccount}
              data_Account={data_Account}
            />
          }
        />
        <Route path="" exact element={<WeatherPage />} />
        <Route path="news" element={<NewsPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
