import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import MyJob from "./pages/MyJob";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import Protectedroute from "./components/Protectedroute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Protectedroute><OnBoarding /></Protectedroute> },
      { path: "/jobs", element: <Protectedroute><JobListing /></Protectedroute> },
      { path: "/job/:id", element: <Protectedroute><JobPage /></Protectedroute> },
      { path: "/post-job", element: <Protectedroute><PostJob /></Protectedroute> },
      { path: "/saved-job", element: <Protectedroute><SavedJob /></Protectedroute> },
      { path: "/my-jobs", element: <Protectedroute><MyJob /></Protectedroute> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Animated Background */}
      <div className="app-background">
        <div className="grid" />
        <div className="grid-dots" />
        <div className="grid-overlay" />
        <div className="particles">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      </div>

      {/* App Content */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};

export default App;
