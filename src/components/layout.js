import React from 'react'
import Header from './header/header'


export default function Layout({ children, page }) {
    return (
        <div className="container-flex">
            <header>
                <Header page={page}/>
            </header>
            {children}
        </div>
    )
}