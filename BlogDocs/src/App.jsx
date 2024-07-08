import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/PrivateRoute";
import ApiKeyGenerator from "./routes/ApiKeyGenerator";
import ApiDocs from "./routes/ApiDocs";
import Login from "./routes/Login";
import { useState } from "react";
import Register from "./routes/Register";
import ResetPassword from "./routes/Reset";
import ResetRequest from "./routes/ResetRequest";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="reset-request" element={<ResetRequest />} />
        <Route path="reset" element={<ResetPassword />} />
        <Route
          path="/generate-api-key"
          element={
            <RequireAuth>
              <ApiKeyGenerator />
            </RequireAuth>
          }
        />
        <Route
          path="/api-docs"
          element={
            <RequireAuth>
              <ApiDocs />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            token ? (
              <ApiKeyGenerator token={token} />
            ) : (
              <Login setToken={setToken} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
