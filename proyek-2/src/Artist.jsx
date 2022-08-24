import {useParams} from 'react-router-dom'

const Artist = () => {

    let params = useParams()

    return(
        <>
        Artist Name {params.name}
        </>
        
    )
}

export default Artist;