import React from "react";

const Layout = ({children}) => {
    return (
        <section>
        <header>Cabeçalho</header>
        {children}
    </section>
    );
}

export default Layout ;