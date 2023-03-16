import React from 'react'

 function DefaultLayout(props){
    return(
        <div>
            <head>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                         <li><a href="/">Home</a></li>
                        <li><a href="/logs">Captain Logs</a></li>
                        <li><a href="/food">Food Logs</a></li>
                    </ul>
                </nav>
                <div>
                {/* //a react thing to put everything inside this layout */}
                    {props.children}
                </div>
            </body>
        </div>
    )
}


export default DefaultLayout