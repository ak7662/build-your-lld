import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const DashboardApp = React.lazy(() => import("dashboard/DashboardApp"));


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
