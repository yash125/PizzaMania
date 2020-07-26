import React from 'react'
const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
  <a className="navbar-brand" href="#" style={{color:'White'}}>PizzaMania</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav rl ml-auto">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
      
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
