import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Ohayo from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Ohayo />
  </StrictMode>
);
