import styled from "styled-components";

export const Wrapper = styled.div`

display: flex;
width: 100%;
justify-content: space-between;
padding: 4px;
margin: 20px 0px;

input {
    border: 1px solid #225ED8;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px
    font-weight: 500;
}

button {
    background-color: #2c5282;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;

&:hover {
    backgrond-color: #ccc;
    box-shadow: 3px 2px 10px ;
}

span{
    font-weight: bold;
    color: #ffff;
}

}
`;