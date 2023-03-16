import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <br />
            {props.logs.title}
            <br/><br/>
            {props.logs.entry}
            <br/><br/>The <strong>{props.logs.title}</strong>
            {props.logs.shipIsBroken ? 'is broken' : 'is NOT broken'}
            
            <p>{props.logs.createdAt.toString()}</p>
            <a href="/logs">Back</a>


            <form action="/logs/clear?_method=DELETE" method="POST">
                <button>CLEAR</button>
            </form>




        </div>
    )
}

export default Show;