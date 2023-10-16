import React from "react";
import "./style.css";
function MainTop({ data }) {

  const urlImg = data.multimedia[Object.keys(data.multimedia)[0]].url;

  console.log(urlImg);

  return (
    <section class="pt-4 pb-0 card-grid">
      <div class="container">
        <div class="row g-4">
          {/* <!-- Left big card --> */}
          <div class="col-lg-6">
            <div
              class="card card-overlay-bottom card-grid-lg card-bg-scale "
              style={{
                backgroundImage: `url(${urlImg}) `,
                backgroundSize: "cover",
              }}
            >
              {/* <!-- Card featured --> */}
              {/* <!-- Card Image overlay --> */}
              <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div class="w-100 mt-auto">
                  {/* <!-- Card title --> */}
                  <h2 class="text-white h2">
                    <a
                      href={data.url}
                      class="btn-link stretched-link text-reset btn-link-handle"
                    >
                      {data.title}.
                    </a>
                  </h2>
                  <p class="text-white">{data.abstract.slice(0, 150)}</p>
                  {/* <!-- Card info --> */}
                  <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                    <li class="nav-item position-relative">
                      <div class="nav-link">{data.byline}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right small cards --> */}
          <div class="col-lg-6">
            <div class="row g-4">
              {/* <!-- Card item START --> */}
              <div class="col-12">
                <div
                  class="card card-grid-sm card-bg-scale"
                  style={{
                    backgroundImage: `url(${urlImg}) `,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <!-- Card Image -->
							<!-- Card Image overlay --> */}
                  <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div class="w-100 mt-auto">
                      {/* <!-- Card title --> */}
                      <h4 class="text-white">
                        <a
                          href={data.url}
                          class="btn-link stretched-link text-reset btn-link-handle"
                        >
                          {data.title}.
                        </a>
                      </h4>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li class="nav-item position-relative">
                          <div class="nav-link">{data.byline}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END -->
					<!-- Card item START --> */}
              <div class="col-md-6">
                <div
                  class="card card-grid-sm-m card-bg-scale"
                  style={{
                    backgroundImage: `url(${urlImg}) `,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <!-- Card Image overlay --> */}
                  <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div class="w-100 mt-auto">
                      {/* <!-- Card title --> */}
                      <h4 class="text-white">
                        <a
                          href={data.url}
                          class="btn-link stretched-link text-reset btn-link-handle"
                        >
                          {data.title}.
                        </a>
                      </h4>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li class="nav-item position-relative">
                          <div class="nav-link">{data.byline}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END -->
					<!-- Card item START --> */}
              <div class="col-md-6">
                <div
                  class="card  card-grid-sm-m card-bg-scale"
                  style={{
                    backgroundImage: `url(${urlImg}) `,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <!-- Card Image overlay --> */}
                  <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                    <div class="w-100 mt-auto">
                      {/* <!-- Card title --> */}
                      <h4 class="text-white">
                        <a
                          href={data.url}
                          class="btn-link stretched-link text-reset btn-link-handle"
                        >
                          {data.title}
                        </a>
                      </h4>
                      {/* <!-- Card info --> */}
                      <ul class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                        <li class="nav-item position-relative">
                          <div class="nav-link">{data.byline}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainTop;
