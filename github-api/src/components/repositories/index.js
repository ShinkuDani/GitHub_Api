import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks.js";
import RepositoryItem from "../repository-item/index.js";
import * as S from './styled.js';

const Repositories = () => {

    const {githubState, getUserRepos, getUserStarred} = useGithub();
    const [hasUserForSearchrepos , setHasUserForSearchrepos] = useState(false);
        useEffect(() => {
            if(githubState.user.login){
                getUserRepos(githubState.user.login);
                getUserStarred(githubState.user.login);
            }
            setHasUserForSearchrepos(githubState.repositories); // !! trasforma em boolean
        },[githubState.user]);
    return(
        <>
        {hasUserForSearchrepos?
        <S.WrapperTabs selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <S.WrapperTablist>
                <S.WrapperTab> 
                    Repositories 
                </S.WrapperTab>
                <S.WrapperTab> 
                    Starred
                 </S.WrapperTab>
                <S.WrapperTab> 
                    Medusa 
                </S.WrapperTab>
            </S.WrapperTablist>
            <S.WrapperTabPanel>
                <S.WrapperList>
                    {githubState.repositories.map((item) => (
                        <RepositoryItem key={item.id}
                        name={item.name} 
                        linktoRepo={item.bounder}
                        fullName={item.full_name} />   
                            )
                        )}
                </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <S.WrapperList>
                    {githubState.starred.map((item) => (
                            <RepositoryItem key={item.id}
                            name={item.name} 
                            linktoRepo={item.bounder}
                            fullName={item.full_name} />   
                                )
                            )}
                </S.WrapperList>  
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>Medusa</S.WrapperTabPanel>
        </S.WrapperTabs>
        : <></>}
    </>
    );

};

export default Repositories;