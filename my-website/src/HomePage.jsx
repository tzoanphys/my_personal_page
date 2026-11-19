import { Link } from 'react-router-dom';
import './App.css';
import './HomePage.css';

/* News items: each has a stable (fixed) date - does not change daily */
const NEWS_ITEMS = [
  {
    date: "8 March 2026",
    title: "New project finished – Learning French",
    linkText: "Look my project",
    linkTo: "/projects"
  },
  /*,...
  /* Add more items here as new news; dates stay fixed. */
];

function HomePage() {
  return (
    <div className="home-page">
      <h2 className="home-welcome-title">Welcome</h2>

      <div className="home-intro">
        <p>Hello and welcome.</p>
        <p>
          I am Ioanna Stamou, a researcher working across physics, software, and machine learning.
        </p>
        <p>
          This website presents my background, notes, projects and publications.
        </p>
        <p>
          You can also visit the <Link to="/about">About</Link> page to learn more about my work and experience.
          Visit my <Link to="/projects">Projects</Link> and <Link to="/publications">Publications</Link> to explore further.
        </p>
      </div>

      <div className="home-bottom-row">
        <section className="home-news-section">
          <h3 className="home-news-title">News</h3>
          <div className="home-news-window">
            {NEWS_ITEMS.map((item, i) => (
              <div key={i} className="home-news-box">
                <div className="home-news-box-date">{item.date}</div>
                <h4 className="home-news-box-title">{item.title}</h4>
                <Link to={item.linkTo} className="home-news-box-link">{item.linkText}</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
