import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import StoryForYou from "./StoryForYou/StoryForYouLeft";
import * as Icon from "react-feather";
import StoryForYouRight from "./StoryForYou/StoryForYouRight";
import MainTop from "./MainTopStart/MainTop";

const NewsPage = () => {
  // const key = "gtIzOCHkHAa2NhIBjC7Zm0tMZz6AFHAy";
  const key = "aa7a66eab03d4cdc902dfa8e339fdab9";
  // const urlLink = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`;
  const urlLink = `https://newsapi.org/v2/everything?q=weather&q=nature&domains=yahoo.com,weather.com,bbc.com,weather.gov&sortBy=relevancy&apiKey=${key}`;
  const [dataNews, setdataNews] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    const fetchDataNews = async () => {
      const response = await axios.get(urlLink);
      setdataNews(response.data.articles);
    };
    fetchDataNews();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((pre) => pre + 4);
  };


  return (
    <div className="bgr-color">
      <Header />
      {dataNews.slice(0, 1).map((data) => (
        <MainTop data={data}/>
      ))}

      {/* =======Main content ===== */}
      <section>
        <div className="container text-center">
          <div className="row">
            {/* StoryForYouLeft */}
            <div className="col-lg-9">
              <div class="mb-4">
                <h2 class="m-0 center-h2"><Icon.Book color="white" />Today's top highlights</h2>
                <p>
                  Latest breaking news, pictures, videos, and special reports
                </p>
              </div>
              <div class="row gy-4">
                {dataNews
                  .filter((data) => data.title !== "")
                  .slice(4, visibleItems)
                  .map((data) => (
                    <StoryForYou data={data} />
                  ))}
              </div>
              <div className="col-12 mt-5 text-center">
                <button
                  onClick={handleLoadMore}
                  type="button"
                  class="btn btn-outline-primary"
                >
                  Load more post
                  <Icon.ArrowDown className="icon-arrow" size={15} />
                </button>
              </div>
            </div>
            {/* StoryForYouRoght */}
            <StoryForYouRight/>
          </div>
          <hr />
        </div>
      </section>

    </div>
  );
};

export default NewsPage;
