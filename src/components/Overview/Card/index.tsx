// src/App.tsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../Overview/overview.css';
import direction from '../../../assets/assistant_direction.png'
import Image1 from '../../../assets/static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg'
import Image2 from '../../../assets/static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg'
import Image3 from '../../../assets/static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg'
import Image4 from '../../../assets/static_assets/4d85410baa074351aa948fc2c5da50d9.jpg'
import Image5 from '../../../assets/static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg'

const Cards = (props: { info: any[]; }) => {
    console.log(props.info)
    // Add more card objects here

    const dynamicImg = (img: string) => {
        switch (img) {
            case "static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg":
                return Image1
            case "static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg":
                return Image2
            case "static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg":
                return Image3
            case "static_assets/4d85410baa074351aa948fc2c5da50d9.jpg":
                return Image4
            case "static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg":
                return Image5
            default:
                break;
        }
    }

  return (
    <Container fluid>
      <Row>
        {props.info.map((card, idx) => (
          <Col md={6} xs={12} xl={4} lg={4} key={idx} className="mb-4">
            <div className='cardContainer'>
                <div className='row'>
            <div className="col-9">
                <div className='cardHeader'>
                    {card.name}
                </div>
            </div>
            <div className="col-3" style={{paddingLeft: 35}}>
            <div className='cardNavigateContainer'>
                    <div className='d-flex justify-content-center'>
                    <img src={direction} />
                    </div>
                    <div className='d-flex justify-content-center mt-2 directionText'>
                                    6 km
                                    </div>
                                    </div>
            </div>
                </div>
              <div>
                <img className='imageStyle' src={dynamicImg(card.images[0])} />
              </div>
              <div className='row m-0 mt-3'>
                    <div className='col buttonSecondary'>
                        <div className="row m-0">
                            <div className="col-10 p-0">
                            <div className='buttonText'>
                        Day Pass
                    </div>
                    <div className='buttonNumber'>
                     ₹ {card.day_pass_price}<span>/ Day</span>
                    </div>
                            </div>
                            <div className="col-2 p-0 d-flex align-items-center justify-content-end">
                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z" fill="#263238"/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z" fill="#263238"/>
</svg>
                            </div>
                        </div>

                    </div>
                    <div className='col buttonPrimary'>
                        <div className="row m-0">
                            <div className="col-10 p-0">
                            <div className='buttonText'>
                       Bulk Pass
                    </div>
                    <div className='buttonNumber'>
                     ₹ {card.day_pass_price}<span>/ Days</span>
                    </div>
                            </div>
                            <div className="col-2 p-0 d-flex align-items-center justify-content-end">
                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z" fill="#263238"/>
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z" fill="#263238"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z" fill="#263238"/>
</svg>
                            </div>
                            </div>
                        </div>
                    </div>
              </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
