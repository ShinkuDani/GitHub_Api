import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;

`;

export const WrapperInfoUsers = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
height: 200px;
margin-left: 8px;
h1{
    font-size: 32px;
    font-weigth: bold;
}

h3{
    font-size: 18px;
    font-weigth: bold;
}

h4{
    font-size: 16px;
    font-weigth: bold;
}



`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
div{
    margin: 9px;
    text-align: center;
}

`;

export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 8px;

h3{
    margin-right: 8px;
}

a{
    font-size: 18px;
    color: blue;
    font-weigth: bold;
}

`;

export const WrapperImage = styled.img`
border-radius: 50%;
width: 200px;
margin: 8px;

`;



