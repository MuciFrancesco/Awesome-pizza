import { Container, Card, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/StoreProvider'
import HeaderAdmin from '../components/HeaderAdmin'


function Admin() {
    const { orderElements, orderDone } = useShoppingCart()



    return (
        <>
            <HeaderAdmin />
            <div className='d-flex flex-wrap  align-items-center mb-4 flex-column mt-5'>
                {orderElements.length > 0 ? orderElements.map((item: any, i: number) => (
                    <>
                        <h3 className="mt-4 mb-4">Ordine N : {i}</h3>
                        <Container key={i} className="d-flex flex-wrap border border-light bg-body-secondary">
                            <ul className='d-flex flex-wrap' key={item[i]}>
                                {item?.map((el: any) => (
                                    <>
                                        <Card key={el?.id} className='order-card m-2'>
                                            <Card.Body className='d-flex flex-column'>
                                                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4 flex-column'>
                                                    <li className='d-flex align-items-center justify-content-center flex-column w-100'>
                                                        <span className='fs-6 mb-2 '>{el?.items?.name} </span>
                                                        <span className="fs-6">X {el?.quantity}</span>
                                                    </li>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </>
                                ))}
                            </ul>
                        </Container>
                        <Button variant='danger' className='m-4' onClick={() => orderDone(item, i)}>Evadi ordine</Button>
                    </>


                ))
                    : <h3 className='m-5'>Nessun ordine</h3>
                }
            </div>
        </>

    )

}

export default Admin