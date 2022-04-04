import { useContext } from "react";
import { GihubContext, GithubContext } from "../providers/github-provider";


const useGithub = () => {
    const { githubState } = useContext(GithubContext);

    return { githubState };
};

export default useGithub;