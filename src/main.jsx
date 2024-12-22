import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Modal from "react-modal";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import { store } from "../store.js";

Modal.setAppElement("#root");
const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </StrictMode>,
);
