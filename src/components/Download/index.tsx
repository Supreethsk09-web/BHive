import { Container } from 'react-bootstrap'
import DownloadImage from '../../assets/download.png'

const download = () => {
return(
    <div>
    <Container>
    <div className='row m-0'>
        <img src={DownloadImage} alt="download" />
    </div>
    </Container>
</div>
)
}
export default download;