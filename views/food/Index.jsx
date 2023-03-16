import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'


function Index(props) {

    return (
      <DefaultLayout title="Index View">
          <div>
            <h1>Index View for Food</h1>
            {props.foodlogs.map((item, index) =>
                <ul>
                    <li>
                        <a href={`/food/${item._id}`}>
                            {item.title} {''} </a>
                    </li>
                </ul>
            )}
            <a href="/food/new">Add...</a>
                <form action="/food/clear?_method=DELETE" method="POST">

                    <button>CLEAR</button>
                    </form>
                 
        </div>
      </DefaultLayout>
    )
}

export default Index