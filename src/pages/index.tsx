import React from "react";
import { Layout } from "../components/layout";
import { LandingSection } from "../components/LandingSection";
import { AboutSection } from "../components/AboutSection";
import { TechSection } from "../components/TechSection";

const App = () => (
  <Layout>
    <LandingSection />
    <AboutSection />
    <TechSection />
  </Layout>
);

export default App;
