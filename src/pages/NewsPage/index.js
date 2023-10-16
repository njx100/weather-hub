import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import StoryForYou from "./StoryForYou/StoryForYouLeft";
import * as Icon from "react-feather";
import StoryForYouRight from "./StoryForYou/StoryForYouRight";
import MainTop from "./MainTopStart/MainTop";
import { Circles } from "@agney/react-loading";

const NewsPage = () => {
  const key = "gtIzOCHkHAa2NhIBjC7Zm0tMZz6AFHAy";
  const urlCard = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`;
  const [isLoading, setIsLoading] = useState(false);

  const [dataNews, setdataNews] = useState([]);

  const [visibleItems, setVisibleItems] = useState(4);
  useEffect(() => {
    const fetchDataNews = async () => {
      setIsLoading(true);
      const response = await axios.get(urlCard);
      setdataNews(response.data.results);
      setIsLoading(false);
    };
    fetchDataNews();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((pre) => pre + 4);
  };
  return (
    <div className="bgr-color">
    <Header />
   {!isLoading ? (
    <div>

    {dataNews.slice(11, 12).map((data) => (
      <MainTop data={data} />
    ))}

    {/* =======Main content ===== */}
    <section>
      <div className="container text-center">
        <div className="row">
          {/* StoryForYouLeft */}
          <div className="col-lg-9 margin-top-4em ">
            <div class="mb-4">
              <h2 class="m-0 center-h2 title-story-left">
                <Icon.Book color="white" />
                Today's top highlights
              </h2>
              <p className="title-story-left p-describe">
                Latest breaking news, pictures, videos, and special reports
              </p>
            </div>

            <div class="row gy-4">
              {dataNews
                .filter((data) => data.title !== "")
                .slice(0, visibleItems)
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
          <StoryForYouRight />
        </div>
        <hr />
      </div>
    </section>
</div>

   ): <Circles/>}
  </div>
  );
};

export default NewsPage;
