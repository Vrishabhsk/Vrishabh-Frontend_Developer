import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Capsules from "./screens/Capsules";
import Landing from "./screens/Landing";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/capsules" Component={Capsules} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
