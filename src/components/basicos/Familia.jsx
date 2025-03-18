
import React, { cloneElement } from "react"
import FamiliaMembro from "./FamiliaMembro"

export default props => {

    return (
        <div>
            {/* {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            } */}
            {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
        </div>
    )
}