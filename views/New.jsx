import React from 'react'

function New() {
    return ( 
        <div>
            <h1>New Log</h1>
            <form action="/logs" method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="ttl" name="title" /><br /><br />

                <label htmlFor="ent">Entry:</label><br />
                <input type="textarea" id="ent" name="entry" /><br /><br />

                <label htmlFor="bkn">Ship Is Broken:</label>
                <input type="checkbox" id="bkn" name="shipIsBroken" /><br /><br />

                <input type="submit"/>
            </form>
        </div>
    );
}

export default New;