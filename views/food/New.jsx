import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function New() {
    return ( 
        <DefaultLayout>
            <div>
            <h1>New Food Log</h1>
            <form action="/food" method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="ing">Ingredients:</label><br />
                <input type="textarea" id="ing" name="ingredients" /><br /><br />

                <label htmlFor="hlt">Is it healthy?</label>
                <input type="checkbox" id="hlt" name="isHealthy" /><br /><br />

                <input type="submit"/>
            </form>
        </div>
        </DefaultLayout>
    );
}

export default New;