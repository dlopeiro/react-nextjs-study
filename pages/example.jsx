import Header from '../src/components/header/header'
import Title from '../src/components/title/title'
import Subtitle from '../src/components/subtitle/subtitle'

function ExamplePage () {
    return (
        <>
            <Header>
                <Title>Dev Café</Title>
                <Subtitle text="The best coffee for the best developers" />
            </Header>
            Example
        </>
    )
}

export default ExamplePage