import React, { useState } from 'react';
import './App.css';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [list, setList] = useState(null);

  const filteredData = list === null ? Data : Data.filter(item => item.type === list);

  return (
    
    <div className="container mt-5" >
      <div className="d-flex justify-content-center mb-3">
      <button onClick={() => setList(null)} className="btn me-2" style={{backgroundColor:"#555050",color:"white"}}>All</button>
        <button onClick={() => setList('breakfast')} className="btn me-2" style={{backgroundColor:"#555050",color:"white"}}>Breakfast</button>
        <button onClick={() => setList('lunch')} className="btn me-2" style={{backgroundColor:"#555050",color:"white"}}>Lunch</button>
        <button onClick={() => setList('dinner')} className="btn me-2" style={{backgroundColor:"#555050",color:"white"}}>Dinner</button>
        <button onClick={() => setList('dessert')} className="btn " style={{backgroundColor:"#555050",color:"white"}}>dessert</button>

      </div>

      <div className="row">
        {filteredData.map((v) => {
          const { name, desc, price, image } = v;
          return (        
          <div key={name} className="col-md-4 mb-3">   
          <div className="card p-4 m-3 w-100">
              <div className="card-img w-30">
                  <img src={image} alt={name} className="card-img-top" style={{width:"300px",height:"400px",objectFit:"cover"}}/>
              </div>
              <div style={{textAlign:"center", paddingTop:"10px"}}>
              <h5 className="card-title" style={{color:"white"}}>{name}</h5>
              <p className="card-text" style={{color:"white"}}>{desc}</p>
              <a href="#" className="btn btn-two" style={{color:"white"}}>{price}</a>
              </div>
           </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
