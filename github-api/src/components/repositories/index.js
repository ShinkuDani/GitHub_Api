import React from "react";
import RepositoryItem from "../repository-item/index.js";
import * as S from './styled.js';

const Repositories = () => {
    return(
        <S.WrapperTabs selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <S.WrapperTablist>
                <S.WrapperTab> Repositories </S.WrapperTab>
                <S.WrapperTab> Starred </S.WrapperTab>
                <S.WrapperTab> Medusa </S.WrapperTab>
            </S.WrapperTablist>
            <S.WrapperTabPanel>
                <RepositoryItem name="app-ideas" 
                linktoRepo="https://github.com/benits/app-ideas"
                fullName="benits/app-ideas" /> 
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem name="benits" 
                linktoRepo="https://github.com/benits/bnits"
                fullName="benits/benits" /> 
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>Medusa</S.WrapperTabPanel>
        </S.WrapperTabs>
    );

};

export default Repositories;