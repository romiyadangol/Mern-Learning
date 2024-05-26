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
              placeholder="Search"
              type="search"
              name="q"
            />

          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
            <Link to={`contacts/1`}>Gyaltsen Lama</Link>
            </li>
            <li>
            <Link to={`contacts/2`}>Romiya Dangol</Link>
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