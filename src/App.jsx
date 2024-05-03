import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { action } from "./reducer/userReducer";

const App = (props) => {
  useEffect(() => {
    props.loadUsers();
    props.loadPosts();
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className="p-3">
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        test
      </button>
      <div className="card w-25 p-3">
        <input
          value={props.userObj.name}
          onChange={(e) => props.getName(e.target.value)}
          className="form-control mb-2"
          type="text"
        />
        <input
          value={props.userObj.phone}
          onChange={(e) => props.getPhone(e.target.value)}
          className="form-control mb-2"
          type="number"
        />
        <input
          value={props.userObj.email}
          onChange={(e) => props.getEmail(e.target.value)}
          className="form-control mb-2"
          type="text"
        />
        <button
          onClick={() => props.saveDoc(props.userObj,props.currentId)}
          className="btn mt-2 btn-dark"
        >
          add doc
        </button>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((itm) => {
            return (
              <tr key={itm.id}>
                <td>{itm.name}</td>
                <td>{itm.phone}</td>
                <td>{itm.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteDoc(itm.id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => props.editItem(itm)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(App);
