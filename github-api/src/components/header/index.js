import React, { useState } from 'react';
import * as S from './styled.js';
import useGithub from "../../hooks/github-hooks";

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return(
        <S.Wrapper>
            <input type={"text"} placeholder="Digite o User name para Pesquisa"  onChange={(event) => setUsernameForSearch(event.target.value)}/>
            <button type="submit" onClick={submitGetUser}>
                <span>BUSCAR</span>
            </button>
        </S.Wrapper>
        
    );
};

export default Header;