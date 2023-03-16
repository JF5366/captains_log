import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Show(props) {
    return (
       <DefaultLayout title="Show View">
         <div>
            <h1>Show Food View</h1>
            <br />
            {props.foodlogs.title}
            <br/><br/>
            {props.foodlogs.ingredients}
            <br/><br/>The <strong>{props.foodlogs.title}</strong>
            {props.foodlogs.isHealthy ? '  is healthy' : ' is NOT healthy'}
            
            <p>{props.foodlogs.createdAt.toString()}</p>
            <a href="/food">Back</a>
   
            <br/><br/>
            <form action={`/food/${props.foodlogs._id}?_method=DELETE`} method="POST">
                <button>DELETE</button>
            </form>


        <a href={`/food/${props.foodlogs._id}/edit`}>Edit</a>


        </div>
       </DefaultLayout>
    )
}

export default Show;