import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/home-page";
import AuthCallbackPage from "./pages/auth-callback-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/profile" element={<span>Profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
