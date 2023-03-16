import React from 'react'


function Index(props) {

    return (
        <div>
            <h1>Index View</h1>
            {props.logs.map((item, index) =>
                <ul>
                    <li>
                        <a href={`/logs/${item._id}`}>{item.title}</a>
                    </li>
                </ul>
            )}


        </div>
    )
}

export default Index