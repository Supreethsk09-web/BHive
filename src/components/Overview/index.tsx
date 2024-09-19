import Card from './Card'
import Fulldata from '../../Data/data.json'
import { Container } from 'react-bootstrap'
import '../Overview/overview.css'
const Overview = () => {
    console.log('Fulldata' ,Fulldata)

return(
    <div>
        <Container>

        <div className="headerText mt-5 mb-5">
        Our Space Overview
        </div>
        
    <Card info={Fulldata} />
        </Container>
    </div>
)
}
export default Overview