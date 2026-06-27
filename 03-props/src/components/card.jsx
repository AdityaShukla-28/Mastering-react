import React from 'react'
function Card(props) {
  return (
    <div className="card-container">
        <div className="card">
        
      <h2>{props.name}</h2>
      <p>{props.eng} Engineer passionate and hardworking</p>

      <button id="profile-button">View Proflie</button>
        </div>

    </div> 
     );
}
export default Card