import React from 'react'
import sideNavContent from './Content'
export default function Sidenav() {
    return (
        <div>
            {sideNavContent.map(x =>{
                return (

                    <img src={x.pic} alt="" />
                )
            })}
        </div>
    )
}
