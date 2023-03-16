import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'


function Index(props) {

    return (
        <DefaultLayout title="Index View">
            <div>
            <h1>Index View for Captain Logs</h1>
            {props.logs.map((item, index) =>
                <ul>
                    <li>
                        <a href={`/logs/${item._id}`}>
                            {item.title} {''} </a>
                    </li>
                </ul>
            )}
            <a href="/logs/new">Add...</a>
                <form action="/logs/clear?_method=DELETE" method="POST">

                    <button>CLEAR</button>
                    </form>
                 
        </div>
        </DefaultLayout>
    )
}

export default Index