import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { CookiesProvider } from "react-cookie"

const queryClient = new QueryClient()
ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <BrowserRouter>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </CookiesProvider>
  </BrowserRouter>,
)
