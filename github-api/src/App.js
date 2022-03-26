import React from "react";
import Layout from "./components/layout/index.js"
import Profile from "./components/Profille/index.js";

const App = () => {
  return (
    <main> 
    <Layout>
      <Profile />
     <div>Repositories</div>
     <div>Starreds</div>
    </Layout>
    </main>
  );
}

export default App;
