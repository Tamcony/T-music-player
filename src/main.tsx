import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "@unocss/reset/tailwind.css"
import "virtual:uno.css"
// import { PersistGate } from "redux-persist/integration/react"
// import store, { persistor } from "./store/index.ts"
// import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      > */}
        <App />
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
)
