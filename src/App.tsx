import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Videos } from "./pages/Videos";
import { VideoDetail } from "./pages/VideoDetail";
import { Audio } from "./pages/Audio";
import { Experiences } from "./pages/Experiences";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/reportages" element={<Videos />} />
          <Route path="/reportages/:slug" element={<VideoDetail />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}