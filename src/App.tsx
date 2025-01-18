
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify"
import Layout from "./layout/Layout"
import { memo, Suspense } from "react"
import { privateRoutes, publicRoutes } from "./helper/routes";
import { useAuthStore } from "./store/auth/authStore";
function App() {
  const { isLogin } = useAuthStore();
  const queryClient = new QueryClient();
  const PublicRoutes = memo(() => {
    return (
      <Layout>
        <Routes>
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route?.path}
                path={route?.path}
                Component={route?.element}
              />
            );
          })}
          <Route path="*" element={<Navigate to={`/login`} />} />
        </Routes>
      </Layout>
    );
  });
  
  const PrivateRoutes = memo(() => {
    return (
      <Layout>
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route?.path}
              path={route?.path}
              Component={route?.element}
            />
          ))}
          <Route path="*" element={<Navigate to={`/home`} />} />
        </Routes>
      </Layout>
    );
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={3000} limit={1} />
      <Suspense fallback={<></>}>
      <Router>
        {!isLogin ? <PublicRoutes /> : <PrivateRoutes />}
        </Router>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
