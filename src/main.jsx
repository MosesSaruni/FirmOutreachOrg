import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import "./index.css";
import AboutPage from "./pages/AboutPage.jsx";
import ProgramsPage from "./pages/ProgramsPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.js";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import SocialsComingSoon from "./pages/SocialsComingSoon.jsx";

// const router = createHashRouter([
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/programs",
    element: <ProgramsPage />,
  },
  {
    path: "/frequently-asked-questions",
    element: <FaqPage />,
  },
  {
    path: "/social-media-coming-soon",
    element: <SocialsComingSoon />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);
