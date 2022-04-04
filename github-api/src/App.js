import React from "react";
import Layout from "./components/layout/index.js"
import Profile from "./components/Profille/index.js";
import Repositories from "./components/repositories/index.js";
import { RessetCSS } from "./global/RessetCSS.js";
import GithubProvider from "./providers/github-provider.js";

const App = () => {
  return (
    <main>
      <GithubProvider> 
        <RessetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </GithubProvider>
    </main>
  );
}

export default App;
