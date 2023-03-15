import React from "react";
import "./App.css";
import { Layout } from "./Layout";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage.js"
import EditPage from "./pages/EditPage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path = "/post/:id" element={<PostPage />} />
            <Route path = "/edit/:id" element={<EditPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
