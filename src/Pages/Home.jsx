import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="banner-text">
          <h1>Hipster Home Page</h1>
          <p>Service Manager - Services & Blog Portal</p>
          <div className="btn">
            <Link to="/Services"><button>View Services</button></Link>
            <Link to="/Blog"><button>Read Blogs</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}