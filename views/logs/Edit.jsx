import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) { 
    return ( 
     <DefaultLayout title="Edit View">
        <div>
            <h1>Edit Logs</h1>
            <form action={`/logs/${props.logs._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" defaultValue={props.logs.title}/><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <input type="textarea" id="ent" name="entry" defaultValue={props.logs.entry}/><br /><br />

                <label htmlFor="bkn">Ship Is Broken:</label>
                <input type="checkbox" id="bkn" name="shipIsBroken" defaultChecked={props.logs.shipIsBroken}/><br /><br />

                <input type="submit"/>
            </form>
        </div>
     </DefaultLayout>
        

    );
}
    

export default Edit