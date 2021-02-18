import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'

export default function Layout({ children, page }) {
    return (
        <>
            <header>
                <Header page={page}/>
            </header>
            {children}
            <Footer />
        </>
    )
}