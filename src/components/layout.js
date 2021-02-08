import React from 'react'
import Header from './header/header'


export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            {children}
        </div>
    )
}