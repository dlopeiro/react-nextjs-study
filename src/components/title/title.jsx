/*
    example of a component with props "children"
*/

import styles from './title.module.css'

function Title (props) { // props cannot be changed
    return (
        <h1 className={styles.title}>
            {props.children}
        </h1>
    )
}

export default Title