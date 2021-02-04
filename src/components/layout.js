import React from 'react'
import Nav from './nav/nav'


export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Nav />
            </header>
            {children}
        </div>
    )
}