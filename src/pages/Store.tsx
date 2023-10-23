//@ts-nocheck
import StoreHeader from '../components/StoreHeader'
import { Row, Col } from "react-bootstrap"
import Card from '../components/Card';
import { useShoppingCart } from '../context/StoreProvider';

function Store() {
    const { vegetarian, setVegetarian, category, object } = useShoppingCart()

    return (
        <>
            <StoreHeader vegetarian={vegetarian} setVegetarian={setVegetarian} category={category} />
            <Row md={2} xs={1} lg={4} className='g-3 store-items'>
                {object.map(item => (
                    <Col key={item.id}>
                        <Card {...item} />
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default Store