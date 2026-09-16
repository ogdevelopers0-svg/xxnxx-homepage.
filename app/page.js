"use client";

import Script from "next/script";

const XNXX_URL = "https://www.xnxx.com/";

const categories = [
  "Today's Selection",
  "History",
  "Popular",
  "New Videos",
  "Trending",
  "Amateur",
  "Couples",
  "MILF",
  "Lesbian",
  "Gay",
  "Big Ass",
  "Big Dick",
  "Anal",
  "Blonde",
  "Brunette",
  "Ebony",
  "Asian",
  "Latina",
  "Mature",
  "Teen 18+",
  "Threesome",
  "Hardcore",
  "Public",
  "Roleplay",
];

const cards = [
  ["Featured Video 01", "12,430 views", "12:18", "thumb-1.svg"],
  ["Trending Video 02", "9,821 views", "08:42", "thumb-2.svg"],
  ["Popular Video 03", "28,104 views", "16:05", "thumb-3.svg"],
  ["New Upload 04", "7,612 views", "10:33", "thumb-4.svg"],
  ["Featured Video 05", "18,944 views", "14:27", "thumb-5.svg"],
  ["Trending Video 06", "31,205 views", "09:51", "thumb-6.svg"],
  ["Popular Video 07", "22,018 views", "18:20", "thumb-7.svg"],
  ["New Upload 08", "6,745 views", "07:34", "thumb-8.svg"],
  ["Featured Video 09", "15,903 views", "11:46", "thumb-9.svg"],
];

function Icon({ children }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

function ExternalLink({ children, className = "", ...props }) {
  return (
    <a
      href={XNXX_URL}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* AGE BAR */}
      <div className="agebar">
        <span>18+ ADULT CONTENT</span>

        <span>
          By entering this website you confirm you are of legal age.
        </span>

        <ExternalLink>
          <button>Enter</button>
        </ExternalLink>
      </div>

      {/* HEADER */}
      <header className="header">
        <ExternalLink className="brand-link">
          <div className="brand">
            XXNXX<span>.COM</span>
          </div>

          <div className="tagline">
            FREE ADULT VIDEOS
          </div>
        </ExternalLink>

        {/* ACCOUNT BUTTONS */}
        <div className="account">
          <ExternalLink title="Notifications">
            <Icon>●</Icon>
          </ExternalLink>

          <ExternalLink title="Settings">
            <Icon>⚙</Icon>
          </ExternalLink>

          <ExternalLink className="login">
            Login
          </ExternalLink>

          <ExternalLink className="register">
            Register
          </ExternalLink>
        </div>

        {/* SEARCH */}
        <div className="search">
          <input
            type="search"
            placeholder="Search videos, categories..."
          />

          <ExternalLink className="search-button">
            <Icon>⌕</Icon>
            Search
          </ExternalLink>
        </div>
      </header>

      {/* TOP NAVIGATION */}
      <nav className="topnav">
        {[
          "HOME",
          "VIDEOS",
          "CATEGORIES",
          "POPULAR",
          "NEW",
          "LIVE",
          "STORIES",
          "COMMUNITY",
        ].map((item, index) => (
          <ExternalLink
            href={XNXX_URL}
            className={index === 0 ? "active" : ""}
            key={item}
          >
            {item}
          </ExternalLink>
        ))}
      </nav>

      {/* MAIN PAGE */}
      <div className="page">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="side-tabs">
            <ExternalLink className="selected">
              Top
            </ExternalLink>

            <ExternalLink>
              A-Z
            </ExternalLink>
          </div>

          <div className="side-links">

            <ExternalLink>
              <Icon>◷</Icon>
              History
            </ExternalLink>

            <ExternalLink>
              <Icon>▣</Icon>
              Today's selection
            </ExternalLink>

            <ExternalLink>
              <Icon>★</Icon>
              Suggestions
            </ExternalLink>

            <ExternalLink>
              <Icon>♛</Icon>
              Premium
            </ExternalLink>

          </div>

          <h3>Categories</h3>

          {categories.map((category) => (
            <ExternalLink key={category}>
              {category}
            </ExternalLink>
          ))}

        </aside>

        {/* CONTENT */}
        <section className="content">

          {/* CONTENT HEADER */}
          <div className="content-head">

            <div>
              <h1>FREE ADULT VIDEOS</h1>

              <p>
                Explore featured, trending and newly uploaded videos.
              </p>
            </div>

            {/* FILTERS */}
            <div className="filters">

              <ExternalLink className="filter active">
                Latest
              </ExternalLink>

              <ExternalLink className="filter">
                Popular
              </ExternalLink>

              <ExternalLink className="filter">
                Top Rated
              </ExternalLink>

            </div>

          </div>

          {/* JUICYADS 300x250 */}
          <div className="ad-slot juicy-ad">

            <div className="ad-label">
              ADVERTISEMENT
            </div>

            <div className="ad-frame">

              <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="afterInteractive"
                data-cfasync="false"
              />

              <ins
                id="1126927"
                data-width="300"
                data-height="250"
              />

              <Script
                id="juicyads-zone-1126927"
                strategy="afterInteractive"
                data-cfasync="false"
              >
                {`
                  (adsbyjuicy = window.adsbyjuicy || []).push({
                    'adzone': 1126927
                  });
                `}
              </Script>

            </div>
          </div>

          {/* VIDEO GRID */}
          <div className="grid">

            {cards.map(
              ([title, views, duration, image]) => (

                <article
                  className="card"
                  key={title}
                >

                  {/* VIDEO THUMBNAIL */}
                  <ExternalLink className="thumb">

                    <img
                      src={`/${image}`}
                      alt=""
                    />

                    <span className="duration">
                      {duration}
                    </span>

                    <span className="play">
                      ▶
                    </span>

                  </ExternalLink>

                  {/* VIDEO DETAILS */}
                  <div className="card-body">

                    <ExternalLink className="title">
                      {title}
                    </ExternalLink>

                    <div className="meta">

                      <span>
                        {views}
                      </span>

                      <span>
                        HD
                      </span>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

          {/* SECOND ADVERTISEMENT SLOT */}
          <div className="ad-slot large">
            ADVERTISEMENT
          </div>

          {/* PAGINATION */}
          <div className="pagination">

            <ExternalLink className="current">
              1
            </ExternalLink>

            <ExternalLink>
              2
            </ExternalLink>

            <ExternalLink>
              3
            </ExternalLink>

            <ExternalLink>
              4
            </ExternalLink>

            <ExternalLink>
              5
            </ExternalLink>

            <ExternalLink>
              Next ›
            </ExternalLink>

          </div>

        </section>
      </div>

      {/* FOOTER */}
      <footer>

        <ExternalLink className="footer-brand">
          XXNXX.COM
        </ExternalLink>

        <div className="footer-links">

          <ExternalLink>
            Terms
          </ExternalLink>

          <ExternalLink>
            Privacy
          </ExternalLink>

          <ExternalLink>
            DMCA
          </ExternalLink>

          <ExternalLink>
            2257
          </ExternalLink>

          <ExternalLink>
            Contact
          </ExternalLink>

          <ExternalLink>
            Report Content
          </ExternalLink>

        </div>

        <p>
          © 2026 XXNXX.COM. All rights reserved. 18+ only.
        </p>

      </footer>

    </main>
  );
}
