import BannerBg from '../../assets/bannerBg.png'
import Vector from '../../assets/Vector.png'
import CoWorking from '../../assets/Coworking.png'
import {Row, Col} from 'react-bootstrap'
import '../Banner/banner.css'
const Banner = () => {
return(
    <div>
        <Row className='ml-0 mr-0 mb-0 bannerStart m-0'>
            <Col xs={12} lg={8} md={8} className='p-0'>
            <div className='banner'>
                <div className='banner-text px-5'>
                Host your meeting with world-class amenities. Starting at <span>₹199/-!</span>
                </div>
            </div>
            </Col>
            <Col xs={12} lg={4} md={4} className='p-0 d-flex justify-content-end'>
            <div className='coworkContainer'>
            <img src={Vector} alt="vec"/>
            <img src={CoWorking} alt="cowork" className='coWorkImage' />
            </div>
            </Col>
        </Row>
    </div>
)
}

export default Banner 