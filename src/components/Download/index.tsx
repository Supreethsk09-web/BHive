import { Container } from 'react-bootstrap'
import DownloadImage from '../../assets/download.png'
import Download2 from '../../assets/downloadCrop2.png'
import arrow from '../../assets/Arrow 3.png';

const download = () => {
return(
    <div>
    <Container>
        <div className="row m-0 downloadmobile">
            <div className="col-11 p-0 headerText downloadmobile">
            Download our app now
            </div>
            <div className="col-1 headerText downloadmobile m-xs-auto">
            <img src={arrow} />
            </div>
        </div>
    <div className='row m-0'>
        <img  className='downloadimage' src={DownloadImage} alt="download" />
        <img className='downloadmobile' src={Download2} alt="down"/>
    </div>
    </Container>
</div>
)
}
export default download;