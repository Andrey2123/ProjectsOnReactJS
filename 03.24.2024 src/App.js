import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import User from "./pages/User";
import Users from "./pages/Users";
import React from 'react';

export default function App() {
  return (
      <>
      <BrowserRouter>
      <nav>
        <Link to="/Users">Users</Link><br/>
        <Link to="/CreateUser">CreateUser</Link>
      </nav>
        <Routes>
          <Route path="/">
            <Route path='User/:id' element={<User />} />
            <Route path='CreateUser' element={<CreateUser />} />
            <Route path="Users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}
