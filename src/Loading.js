import { Fade } from 'react-swift-reveal'

const Loading = () => {
    return (
        <Fade delay={500} timeout={1500}>
            <p className='text-center loading-style'>Loading...</p>
        </Fade>
    )
}

export default Loading
