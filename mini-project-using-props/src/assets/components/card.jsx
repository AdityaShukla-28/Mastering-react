import React from "react";
import { Bookmark } from "lucide-react";

const Card =(props) => {
    return(
        
            <div className="card">

                <div className="top">
                    <img src={props.logo} alt = ""/>
                    <button>    <Bookmark /> </button>
                </div>

                <div className="center">
                    <h3>{props.company} <span>5 days ago</span></h3>
                    <h2>{props.post}</h2>
                    <div className="center-tag">
                        <h4>{props.tag1}</h4><br></br>
                        <h4>{props.tag2}</h4>
                    </div>


                </div>

                <div className="bottom">
                    <div className="info">
                          <h3>{props.pay}</h3>
                          <p>{props.location}</p>
                    </div>
                     <button>Apply Now</button>
                </div>

            </div>

    )
}
export default Card;