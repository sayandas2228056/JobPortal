import React from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react"; 
import "./index.css";
import App from "./App.jsx";
const shadesOfPurple = {
  colors: {
    primary: "#6B46C1",
    primaryLight: "#9F7AEA",
    primaryDark: "#44337A",
    background: "#FAF5FF",
    // Add other color variables as needed
  }
};

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key. Set VITE_CLERK_PUBLISHABLE_KEY in .env file.");
} else {
  console.log("Clerk Key:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPubKey}
    > 
      <App />
    </ClerkProvider>
  </React.StrictMode>
);