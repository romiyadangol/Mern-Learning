import '../assets/root.css';
import { Outlet, Link } from "react-router-dom";

function Root(){
    return (
        // <>
        // <div className="side-bar">
        //     <h1>React Router Contacts</h1>
        //         <div>
        //             <form>
        //                 <input 
        //                 type="text"
        //                 placeholder="search"/>
        //             </form>
        //             <form action="" method="post">
        //                 <button type="submit">New</button>
        //             </form>
        //         </div>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <a href="">Romiya Dangol</a>
        //                 </li>
        //                 <li>
        //                     <a href="">Soniya Dangol</a>
        //                 </li>
        //             </ul>
        //         </nav>
        // </div>
        // <div className="detail"></div>
        // </>


        <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
            <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
            <Link to={`contacts/1`}>Your Name</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
      </div>
    </>
        
    );
}
export default Root;