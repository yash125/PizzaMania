import React,{useState,useEffect} from 'react'
import H from "./H"
import '../App.css'

const Home =()=>{
    

    return(
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="container-fluid">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 img-fluid" src="https://i.ytimg.com/vi/5DZA85l868c/maxresdefault.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-fluid" src="https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 img-fluid" src="https://images.dominos.co.in/new_veg_extravaganza.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
</div>
        </>
    )
}
export default Home;
