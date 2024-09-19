import {Navbar, Container, Row , Col} from 'react-bootstrap';
import CallIcon from '../../assets/call.png'
import '../Header/header.css';
import Logo from '../../assets/image 54.png'

const Header = () => {
return(
    <div>
         <Navbar expand='sm' fixed="top" className="NavProp">
      <Container>
        <Navbar.Brand>
        <img src={Logo} alt="callImage" />
        </Navbar.Brand>
        <Row>
          <Col xs="auto">
            <img className='callborder' src={CallIcon} alt="callImage" />
          </Col>
        </Row>
      </Container>
    </Navbar>
    </div>
)
}
export default Header