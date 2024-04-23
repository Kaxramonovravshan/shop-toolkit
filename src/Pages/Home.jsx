import React from "react";
import { connect } from "react-redux";
import { cartAction } from "../reducer/cartReducer";

const Home = (props) => {
 
  return (
    <div className="row gap-3 p-4">
      {props.products.map((itm, i) => {
        return (
          <div key={i} className="card p-0 col-3">
            <div className="card-header">
              <h3>{itm.name}</h3>
            </div>
            <div className="card-body">
              <img className="w-50 block mx-auto mb-3" src={itm.img} alt="" />
              <div className="flex items-center justify-between mb-4">
                <p>
                  Price: <span className="text-lime-600">{itm.price}</span>
                </p>
                <p> Date : {itm.date}</p>
              </div>
              <p>Type: {itm.type}</p>
              <p>{itm.desc}</p>
            </div>
            <div className="card-footer">
              <button
                onClick={() => props.addCart(itm)}
                className="btn btn-success"
              >
                add cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect((state) => ({ ...state.product }), cartAction)(Home);
