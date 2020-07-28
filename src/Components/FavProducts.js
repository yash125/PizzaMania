import React,{useEffect,useState} from 'react'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css"
import ReactTooltip from "react-tooltip";
import Modal from 'react-modal';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
    };
    // Modal.setAppElement('#yourAppElement')

const FavProducts = () =>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
      var subtitle;
      const [modalIsOpen,setIsOpen] =useState(false);
      const[cost ,setCost] = useState(0)
      const handleChange=(p)=>{
        const x= parseInt(p.target.value)
        setCost(cost+x)
      }
      function openModal() {
        setIsOpen(true);
      }
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
     
      function closeModal(){
        setIsOpen(false);
      }

      
 


    return(
        <>
        <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
        
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
        <div className="container">
            
        <div className="col-sm-10 col-12 col-md-12">
    <h1>{cost}</h1>
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
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
            
        
        </div>
        
    </div>
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto " style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <ReactTooltip id="registerTip1" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>

            <p className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip1"></i></i><br/></p>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" data-aos="fade-left" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <ReactTooltip id="registerTip2" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>
            <p className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip2"></i></i><br/></p>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto"  data-aos="fade-right" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <ReactTooltip id="registerTip3" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>
            <p className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip3"></i></i><br/></p>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <ReactTooltip id="registerTip4" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>
            <p className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip4"></i></i><br/></p>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
        </div>
        </div>
        
    </div>
    <div className="col-sm-6 col-md-4">
    <div className="card mx-auto" data-aos="fade-left" style={{width: "18rem"}}>
            <img className="card-img-top " width="100" height="280" src="https://rasamalaysia.com/wp-content/uploads/2012/06/chicken-tikka-masala-pizza-thumb-480x480.jpg" alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Chicken Tikka Masala Pizza</h5>
            <ReactTooltip id="registerTip5" place="top" effect="solid">
            Sausage, caramelized onions, and fennel.
Pepperoni, tomatoes, mushrooms, and onion   .
      </ReactTooltip>
            <p className="card-text"><i>Topping info<i className="fa fa-info-circle fa-x "  data-tip data-for="registerTip5"></i></i><br/></p>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" value={299} onClick={(e)=>{handleChange(e)}}>Add to Cart</button>
        </div>
        
    </div>

    </div>
    
    </div>



    

            
      </div>      
        </>
    );

}



export default FavProducts;