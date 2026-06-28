import React from "react";
import { Bookmark } from "lucide-react";

const Card =() => {
    return(
        <div className="parent">
            <div className="card">

                <div className="top">
                    <img src ="https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg" alt = ""/>
                    <button>    <Bookmark /> </button>
                </div>

                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX designer</h2>
                    <div className="center-tag">
                        <h4>Part time</h4><br></br>
                        <h4>Senior Level</h4>
                    </div>


                </div>

                <div className="bottom">
                    <h3>$120/hr</h3>
                    <p>Mumbai,India</p>
                    <div className="b-button">
                        <button>Apply Now</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Card;