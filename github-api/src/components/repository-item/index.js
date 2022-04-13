import react from "react";
import * as S from "./styled";

const RepositoryItem = () => {
    return(
    <S.Wrapper>

        <S.WrapperTitle>app-ideais</S.WrapperTitle>
        <S.WrapperFullname>Full name:</S.WrapperFullname>
        <S.WrapperLink href="https://github.com/ShinkuDani" target="_blanck" rel="noreferrer">ShinkuDani</S.WrapperLink>
        <span>benits/app-ideas</span>

        </S.Wrapper>
    );
};

export default RepositoryItem