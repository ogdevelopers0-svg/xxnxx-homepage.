import Script from "next/script";

const categories = [
  "Today's Selection", "History", "Popular", "New Videos", "Trending",
  "Amateur", "Couples", "MILF", "Lesbian", "Gay", "Big Ass", "Big Dick",
  "Anal", "Blonde", "Brunette", "Ebony", "Asian", "Latina", "Mature",
  "Teen 18+", "Threesome", "Hardcore", "Public", "Roleplay"
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
  ["Featured Video 09", "15,903 views", "11:46", "thumb-9.svg"]
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <div className="agebar">
        <span>18+ ADULT CONTENT</span>
        <span>By entering this website you confirm you are of legal age.</span>
        <button>Enter</button>
      </div>

      <header className="header">
        <div className="brand">XXNXX<span>.COM</span></div>
        <div className="tagline">FREE ADULT VIDEOS</div>
        <div className="account">
          <button title="Notifications"><Icon>●</Icon></button>
          <button title="Settings"><Icon>⚙</Icon></button>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
        <div className="search">
          <input placeholder="Search videos, categories..." />
          <button><Icon>⌕</Icon> Search</button>
        </div>
      </header>

      <nav className="topnav">
        {["HOME", "VIDEOS", "CATEGORIES", "POPULAR", "NEW", "LIVE", "STORIES", "COMMUNITY"].map((item, i) => (
          <a href="#" className={i === 0 ? "active" : ""} key={item}>{item}</a>
        ))}
      </nav>

      <div className="page">
        <aside className="sidebar">
          <div className="side-tabs">
            <button className="selected">Top</button>
            <button>A-Z</button>
          </div>
          <div className="side-links">
            <a href="#"><Icon>◷</Icon> History</a>
            <a href="#"><Icon>▣</Icon> Today's selection</a>
            <a href="#"><Icon>★</Icon> Suggestions</a>
            <a href="#"><Icon>♛</Icon> Premium</a>
          </div>
          <h3>Categories</h3>
          {categories.map(c => <a href="#" key={c}>{c}</a>)}
        </aside>

        <section className="content">
          <div className="content-head">
            <div>
              <h1>FREE ADULT VIDEOS</h1>
              <p>Explore featured, trending and newly uploaded videos.</p>
            </div>
            <div className="filters">
              <button className="filter active">Latest</button>
              <button className="filter">Popular</button>
              <button className="filter">Top Rated</button>
            </div>
          </div>

          <div className="ad-slot juicy-ad">
            <div className="ad-label">ADVERTISEMENT</div>
            <div className="ad-frame">
              <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="afterInteractive"
                data-cfasync="false"
              />
              <ins id="1126927" data-width="300" data-height="250"></ins>
              <Script
                id="juicyads-zone-1126927"
                strategy="afterInteractive"
                data-cfasync="false"
              >
                {`(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1126927});`}
              </Script>
            </div>
          </div>

          <div className="grid">
            {cards.map(([title, views, duration, image]) => (
              <article className="card" key={title}>
                <a href="#" className="thumb">
                  <img src={"/" + image} alt="" />
                  <span className="duration">{duration}</span>
                  <span className="play">▶</span>
                </a>
                <div className="card-body">
                  <a href="#" className="title">{title}</a>
                  <div className="meta"><span>{views}</span><span>HD</span></div>
                </div>
              </article>
            ))}
          </div>

          <div className="ad-slot large">ADVERTISEMENT</div>

          <div className="pagination">
            <button className="current">1</button><button>2</button><button>3</button>
            <button>4</button><button>5</button><button>Next ›</button>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-brand">XXNXX.COM</div>
        <div className="footer-links">
          <a href="#">Terms</a><a href="#">Privacy</a><a href="#">DMCA</a>
          <a href="#">2257</a><a href="#">Contact</a><a href="#">Report Content</a>
        </div>
        <p>© 2026 XXNXX.COM. All rights reserved. 18+ only.</p>
      </footer>
    </main>
  );
}
