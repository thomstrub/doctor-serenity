import React from "react"
import {Link} from "gatsby"

export default function Home() {
  return (
    <>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <div style={{ color: `purple`, fontSize: `72px` }}>Doctor Serenity</div>
    <div style={{color: 'purple'}}> <p>What a world</p></div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </>
  ) 
}
