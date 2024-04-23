import React from "react";
import { connect } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { productAction } from "../reducer/productreducer";
import ImgSelect from "../images/img2.jpg";

const Admin = (props) => {
  return (
    <div className="w-1/3 border mt-3 rounded-2xl mx-auto p-3">
      <label>
        <img
          className={props.prObject.img ? "w-1/2" : "w-1/5"}
          src={props.prObject.img ? props.prObject.img : ImgSelect}
          alt=""
        />
        <input
          onChange={(e) => props.getImg(e)}
          className="mb-2 d-none"
          type="file"
        />
      </label>
      <input
        value={props.prObject.name}
        onChange={(e) => props.getName(e.target.value)}
        placeholder="pr_name ..."
        className="form-control mb-2"
        type="text"
      />
      <input
        value={props.prObject.price}
        onChange={(e) => props.getPrice(e.target.value)}
        placeholder="pr_price ..."
        type="text"
        className="form-control mb-2"
      />
      <CreatableSelect
        value={props.prObject.type}
        onChange={(newValue) => props.getType(newValue)}
        options={props.types}
        className="mb-2"
      />
      <input
        value={props.prObject.date}
        onChange={(e) => props.getDate(e.target.value)}
        className="form-control mb-2"
        type="date"
      />
      <textarea
        value={props.prObject.desc}
        onChange={(e) => props.getDesc(e.target.value)}
        placeholder="pr_desc ... "
        className="form-control mb-2"
        cols="30"
        rows="4"
      ></textarea>
      <button
        onClick={() => props.save()}
        className="btn btn-dark w-50 mx-auto block"
      >
        save
      </button>
    </div>
  );
};

export default connect((state) => ({ ...state.product }), productAction)(Admin);
