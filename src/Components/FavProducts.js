import React,{useEffect} from 'react'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css"
import ReactTooltip from "react-tooltip";
const FavProducts = () =>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return(
        <>
        <div className="container">
            
        <div className="col-sm-10 col-12 col-md-12">
        <h1>Best Deals Today</h1>
        </div>

        <div className="row text-center">
        <div className="col-12 col-sm-6 col-md-4">
            
            <div className="card mx-auto card-hover h-100 " data-aos="fade-right" style={{width: "18rem"}}>
            <img className="card-img-top" width="100" height="280" src="https://i2.wp.com/nationalfoods.org/wp-content/uploads/2018/11/National-Dish-of-Italy-Pizza.jpg?fit=1140%2C500&ssl=1" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Italian Pizza</h5>
           
            <div className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip"></i></i><br/></div>
            <ReactTooltip id="registerTip" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion.
      </ReactTooltip>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        
    </div>
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto " style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>

            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" data-aos="fade-left" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto"  data-aos="fade-right" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" data-aos="fade-left" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        
    </div>

    </div>
    
    </div>



    

            
            
        </>
    );

}



export default FavProducts;