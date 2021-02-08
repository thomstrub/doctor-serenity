import React from 'react'
import Header from './header/header'


export default function Layout({ children }) {
    return (
        <div className="container-flex">
            <header>
                <Header />
            </header>
            {children}
        </div>
    )
}