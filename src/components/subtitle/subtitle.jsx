/* 
    example of a component with property (props) "text" using destructure
*/

function Subtitle ({ text }) {
    return(
        <h4>{ text }</h4>
    )
}

// the default prop is applied if not determined when the component is being imported (in this case on the index.js file)
Subtitle.defaultProps = {
    text: 'Default'
}

export default Subtitle