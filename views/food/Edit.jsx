import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) { 
    return ( 
     <DefaultLayout title="Edit View">
        <div>
            <h1>Edit Foods</h1>
            <form action={`/foodlogs/${props.foodlogs._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" defaultValue={props.foodlogs.title}/><br /><br />

                <label htmlFor="ing">Ingredients:</label><br />
                <input type="textarea" id="ing" name="ingredients" defaultValue={props.foodlogs.ingredients}/><br /><br />

                <label htmlFor="hlt">Is it healthy?</label>
                <input type="checkbox" id="hlt" name="isHealthy" defaultChecked={props.foodlogs.isHealthy}/><br /><br />

                <input type="submit"/>
            </form>
        </div>
     </DefaultLayout>
        

    );
}
    

export default Edit