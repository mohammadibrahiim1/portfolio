import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
                     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link  class="navbar-brand" href="#">Navbar scroll</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
        <li class="nav-item">
          <Link  class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" href="#">Link</Link>
          
        </li>
        <li class="nav-item dropdown">
          <Link  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </Link>
          <ul class="dropdown-menu">
            <li><Link  class="dropdown-item" href="#">Action</Link></li>
            <li><Link  class="dropdown-item" href="#">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link  class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link  class="nav-link disabled">Link</Link>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
