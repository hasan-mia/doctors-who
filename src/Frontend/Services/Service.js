import React from 'react';
import { Link} from 'react-router-dom';

const Service = ({service}) => {
    const {title, img, description, price, id}=service;
    // const servicetDetails = useNavigate()
	return (
		<>
		<div className="col-md-4 col-12 my-2">
            <div className="card p-2">
                <div className="d-flex p-1 align-items-center"> 
					<img src={img} className="img-fluid card-img" alt='service'/>
				</div>
                <div className="my-1 text-capitalize"> 
                    <h5>{title}</h5>
                    <div className="short-description">
						<p>{description.slice(0, 100)}</p> 
					</div>
                </div>
                {/* <div className="d-flex flex row align-items-center mr-2 mb-4">
                    <div className="icons1"> <i className="fa fa-check-circle"></i> <span>Google Ads</span> </div>
                    <div className="icons1"> <i className="fa fa-check-circle"></i> <span>Facebook Ads</span> </div>
                    <div className="icons1"> <i className="fa fa-check-circle"></i> <span>Linkedin and Twitter Ads</span> </div>
                </div> */}
				<div className="enroll">
                    <Link to={`/service/${id}`}><span className='read-more'>Get Service..</span></Link>
                    <span>${price}</span>
                </div>
                {/* <button onClick={()=>servicetDetails(`/service/${id}`)}><span className='read-more'>Read more..</span></button> */}
            </div>
        </div>
		</>
	);
};

export default Service;