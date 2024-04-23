import React from "react";
import { connect } from "react-redux";
import { cartAction } from "../reducer/cartReducer";

const Cart = (props) => {
  return (
    <div className="w-100 h-screen border flex items-start justify-between">
      <div className="w-3/4 row gap-3 p-4 border h-screen">
        {props.carts.map((itm, i) => {
          return (
            <div key={i} className="card p-0 col-3 h-48">
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
            </div>
          );
        })}
      </div>
      <div className="w-1/4 border p-4 min-h-48">
        <input
          onChange={(e) => props.getPromo(e.target.value)}
          placeholder="enter promo cod"
          className="form-control mb-2"
          type="text"
        />
        <button
          onClick={() => props.verify()}
          className="btn btn-dark w-50 block mx-auto m-3"
        >
          Verify
        </button>

        <h1 className="text-xl mb-3">
          Total:{" "}
          <span className={props.newTotal !== 0 ? "line-through" : ""}>
            {props.total}$
          </span>{" "}
        </h1>
        <h1 className="text-red-700 text-xl font-extrabold">
          New Total: {props.newTotal}$
        </h1>
      </div>
    </div>
  );
};

export default connect((state) => ({ ...state.cart }), cartAction)(Cart);
