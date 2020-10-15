import React from "react";
import { Layout } from "../components/layout";
import { LandingSection } from "../components/LandingSection";
import { AboutSection } from "../components/AboutSection";

const App = () => (
  <Layout>
    <LandingSection />
    <AboutSection />
  </Layout>
);

export default App;
