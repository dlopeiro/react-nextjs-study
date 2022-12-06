import Header from "../src/components/header/header"
import Title from "../src/components/title/title"
import Subtitle from "../src/components/subtitle/subtitle"
import Head from "next/head"

function AnotherExample () {
    return (
        <>
            <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
                <Title>The New Dev Café</Title>
                <Subtitle text="The best ALL VEGAN coffee for the best developers" />
            </Header>
        </>
    )
}

export default AnotherExample