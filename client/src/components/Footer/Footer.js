import React from 'react'
import { Description } from '@material-ui/icons'

function Footer() {
    return (
        <footer id="footer">
            <Description fontSize="small"></Description>:{' '}
            <a
                href={
                    'https://docs.google.com/document/d/1yhhwXNruYLWPjKRdvoArulEOsgFxSgPNPveok01FvjE/edit?usp=sharing'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="card-link text-primary"
                id="resume"
            >
                Resume
            </a>
        </footer>
    )
}

export default Footer
