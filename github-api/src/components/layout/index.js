import react, { Children } from 'react';

function Layout(){
    return <section>
        <header>Header</header>
        {Children}
    </section>
}

export default Layout ;