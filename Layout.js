import React from 'react'
import { Header, Footer } from 'mdx-deck'

export default ({ children }) => (
  <div>
    <Header>
        DevEd - The story of The Giving Dev 
    </Header>
    
    {children}

    <Footer>
    kobi.kadosh@gmail.com    twitter@KobiKadosh    linkedin/kobikadosh   github.com/wildcard
    </Footer>
  </div>
)