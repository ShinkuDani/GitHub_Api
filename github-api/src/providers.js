import React from 'react'
import App from './App';
import { RessetCSS } from './global/RessetCSS';
import GithubProvider from './providers/github-provider'

const Providers = () =>{
    return(
        <main>
            <GithubProvider> 
            <RessetCSS />
            <App />
            </GithubProvider>
        </main>
    );
}

export default Providers;