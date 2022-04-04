import React from "react";
//import * as S from "./styled"

const Layout = ({children}) => {
    return (
        <section>
        <header>Cabeçalho</header>
        {children}
    </section>
    );
}

export default Layout ;