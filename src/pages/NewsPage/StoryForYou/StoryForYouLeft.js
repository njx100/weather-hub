import { useState } from "react";

function StoryForYou({ data }) {
  //   const dataNew = dataNews.map((data, index) => (
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  const dateStr = data.published_date;
  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() - 1; 
  const monthAbbreviation = months[month]
  const day = dateObj.getDate().toString().padStart(2, '0');
  const result = `- ${monthAbbreviation} ${day}, ${year}`;
  const dataNew = (
    <div className="col-sm-6">
      <div className="card">
        <img
          className="card-img"
          src={data.multimedia[Object.keys(data.multimedia)[0]].url}
          alt={data.multimedia[Object.keys(data.multimedia)[0]].type}
        />
        <div className="card-body pt-3 ">
          <h5 className="card-title">
            <a className="btn-link btn-link-handle" href={data.url}>
              {data.title}
            </a>
          </h5>
          <p className="card-text p-describe">{data.abstract}</p>
          <ul className="ul">
            <li className="nav-item">{data.byline}</li>
            <li className="nav-item">{result}</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return dataNew;
}

export default StoryForYou;
