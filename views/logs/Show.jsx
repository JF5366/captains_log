import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Show(props) {
    return (
        <DefaultLayout title="Show View">
            <div>
            <h1>Show Captains View</h1>
            <br />
            {props.logs.title}
            <br/><br/>
            {props.logs.entry}
            <br/><br/>The <strong>{props.logs.title}</strong>
            {props.logs.shipIsBroken ? ' is broken' : ' is NOT broken'}
            
            <p>{props.logs.createdAt.toString()}</p>
            <a href="/logs">Back</a>
   
            <br/><br/>
            <form action={`/logs/${props.logs._id}?_method=DELETE`} method="POST">
                <button>DELETE</button>
            </form>


        <a href={`/logs/${props.logs._id}/edit`}>Edit</a>


        </div>
        </DefaultLayout>
    )
}

export default Show;