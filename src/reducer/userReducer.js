import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    posts: [],
    userObj: { name: "", phone: "", email: "" },
    currentId: ""
  },
  reducers: {
    clearCurrent: (state, action) => {
      state.currentId = "";
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },

    getName: (state, action) => {
      state.userObj.name = action.payload;
    },
    getEmail: (state, action) => {
      state.userObj.email = action.payload;
    },
    getPhone: (state, action) => {
      state.userObj.phone = action.payload;
    },
    editItem: (state, action) => {
      state.currentId = action.payload.id;
      state.userObj = action.payload;
    }
  }
});

function loadUsers() {
  return {
    type: "apiCall",
    payload: {
      collection: "users",
      method: "GET",
      data: "",
      onSuccess: userSlice.actions.getUsers
    }
  };
}

function saveDoc(data, id) {
  return {
    type: "apiCall",
    payload: {
      collection: "users",
      method: "POST",
      id,
      data,
      onSuccess: loadUsers
    }
  };
}

function loadPosts() {
  return {
    type: "apiCall",
    payload: {
      collection: "posts",
      method: "GET",
      data: "",
      onSuccess: userSlice.actions.getPosts
    }
  };
}

function deleteDoc(id) {
  return {
    type: "apiCall",
    payload: {
      collection: "users",
      method: "DELETE",
      id,
      data: "",
      onSuccess: loadUsers
    }
  };
}

export const action = {
  ...userSlice.actions,
  loadUsers,
  loadPosts,
  saveDoc,
  deleteDoc
};

export default userSlice;
