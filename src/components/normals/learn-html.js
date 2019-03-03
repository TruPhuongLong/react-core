import React from 'react'

import './learn-html.css'

export default _ => (
    <div>
        <a href="mailto:longbaloca@gmail.com">send mail</a>
        <br />
        <a href="tel:+840383884519">call mother</a>
        <br />
        You can populate the subject and body for the new email as well:
<a href="mailto:longbaloca@gmail.com?subject=Example+subject&body=Message+text">Send email already have body</a>
    </div>
)