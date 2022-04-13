import React from "react";
import Layout from "./components/layout/index.js"
import NoSearch from "./components/noSearch/index.js";
import Profile from "./components/Profille/index.js";
import Repositories from "./components/repositories/index.js";
import useGithub from "./hooks/github-hooks.js";

const App = () => {
  const { githubState } = useGithub();
  return (
      <Layout>
       {githubState.hasUser ?  <>
        {githubState.loading ? (<p>Loading</p>) :
         (
          <>
          <Profile />
          <Repositories />
          </>
        )}
        </> : 
        <NoSearch />
        }
      </Layout>
  );
}

export default App;
