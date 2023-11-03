import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeMainPage from "@/pages/HomeMainPage"
import HomeSettingPage from "@/pages/HomeSettingPage"

const router = (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<HomeMainPage />}
      />
      <Route
        path="/setting"
        element={<HomeSettingPage />}
      ></Route>
    </Routes>
  </Router>
)

export default router
