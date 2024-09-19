import { Container } from "react-bootstrap";
import Gym from '../../assets/amen.png';
import Wifi from '../../assets/wifi.png';
import Coffee from '../../assets/coffee.png';
import Cost from '../../assets/cost.png';
import Chair from '../../assets/amen.png';
import Time from '../../assets/time.png';
import Play from '../../assets/play.png';
import '../Choose/choose.css'

const Choose = () => {
return (
    <>
    <Container>
    <div className="headerText mt-5">
            Why Choose us?
        </div>
    </Container>
        <div className="mt-4">
            <div className="container">
                <div  className="box-center chooseText">
                    <img src={Gym} alt="img" />
                <span className="px-2">Community Events</span>
                </div>
                <div  className="box-center chooseText">
                <img src={Gym} alt="img" />
                <span className="px-2">
                Gym Facilities
                </span>
                </div>
                <div  className="box-center chooseText">
                <img src={Wifi} alt="img" />
                <span className="px-2">
                High-Speed WiFi
                </span>
                </div>
                <div  className="box-bottom chooseText">
                <img src={Coffee} alt="img" />
                <span className="px-2">
                Cafe & Tea Bar
                </span>
                </div>
                <div  className="box-right chooseText">
                <img src={Cost} alt="img" />
                <span className="px-2">
                Affordable
                </span>
                </div>
                <div  className="box-right chooseText">
                <img src={Chair} alt="img" />
                <span className="px-2">
                Comfort Lounges
                </span>
                </div>
                <div  className="box-right chooseText">
                <img src={Time} alt="img" />
                <span className="px-2">
                Quick Booking
                </span>
                </div>
                <div  className="box chooseText">
                <img src={Play} alt="img" />
                <span className="px-2">
                Sports Area
                </span>
                </div>
            </div>
        </div>
    </>
)
}
export default Choose;