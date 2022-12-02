import { useState } from 'react'
import Head from 'next/head'

import Title from "../src/components/title/title" // we import things like this when the function is being exported as default inside the file
import Subtitle from "../src/components/subtitle/subtitle" // other than that we have to import them between }{
import Button from '../src/components/button/button'

function HomePage () {
    const [click, setClick] = useState(0)

    const handleClick = () => {
        console.log("handle click")
        setClick(click + 1)
    }

    return (
        <>
            <Head>
                <title>other title</title>
            </Head>
            <div>
                <Title>A title</Title>
                <Subtitle text="a subtitle" />
                <p>stuff written here</p>
                <Title>Another title</Title>
                <Subtitle text="another subitle" />
                <p>some more stuff written here</p>
                <Button onClick={ handleClick }>Test button</Button>
                <p>Times clicked: { click }</p>
            </div>
        </>
    )
}

export default HomePage