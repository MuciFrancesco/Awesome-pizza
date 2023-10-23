
import { Container, Card, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/StoreProvider'
import deliveryDate from "../hooks/DeliveryDate";



function Order() {

    const { orderElements, oldOrders, confirmOrder, setCartItem } = useShoppingCart();
    const lastOldOrders: any = oldOrders.slice(-2);

    return (
        <>
            <Container className="mt-5">
                {orderElements.length > 0 &&
                    <div className="container-review">
                        <h2 className="mt-3">Grazie per il tuo ordine.</h2>
                        <h5 className="mt-4">Sarai avvisato appena l'ordine sarà pronto</h5>
                    </div>
                }
                <div className="about-card mt-5">
                    <h2 className='typography-2 capitalize mb-10 mx-10 text-center heading-hr'><span>Riepilogo odini </span></h2>
                </div>
                <div className='d-flex flex-wrap  justify-content-evenly align-items-center  flex-wrap mt-5 mb-5 shadow-lg'>
                    {orderElements?.length > 0 ? orderElements?.map((item: any, i: number) => (
                        <div key={i} className="container-single-order d-flex justify-content-center align-items-center flex-column flex-wrap border p-4  border-1">
                            <h5 className="mt-4 mb-4">Ordine N : {i}</h5>
                            <h6 className="mb-4"> {deliveryDate(item, orderElements)}</h6>
                            <Container className="container-single-element d-flex flex-wrap flex-row border border-light  w-auto p-4 border-0">
                                {item?.map((el: any, i: number) => (
                                    <>
                                        <Card key={el?.id || i} className='order-card  m-2'>
                                            <Card.Img variant="top" src={el?.items?.img} height={150} width={"100%"} style={{ objectFit: "cover" }} />
                                            <Card.Body className='d-flex flex-column'>
                                                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                                                    <span className='fs-6'>{el?.items?.name}</span>
                                                    <span className="fs-6">n.{el?.quantity}</span>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </>
                                ))}
                            </Container>
                        </div>
                    )) :
                        <p>Nessun ordine effettuato</p>
                    }
                </div>
            </Container >
            {lastOldOrders.length > 0 ? <Container className="mt-5">
                <div className="about-card mt-5">
                    <h2 className='typography-2 capitalize mb-10 mx-10 text-center heading-hr'><span>Fidati dei tuoi gusti </span></h2>
                </div>
                <div className='d-flex flex-wrap  align-items-baseline mb-4 flex-column mt-5'>
                    {lastOldOrders.map((item: any, i: number) => (
                        <div key={i}>
                            <h3 className="mt-4 mb-4">Riaquista questo ordine:</h3>
                            <Container className="d-flex flex-wrap border border-light bg-body-secondary">
                                {item.map((el: any) => (
                                    <Card key={el?.id} className='order-card m-2'>
                                        <Card.Img variant="top" src={el?.items?.img} height={150} width={"100%"} style={{ objectFit: "cover" }} />
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                                                <span className='fs-6'>{el?.items?.name}</span>
                                                <span className="fs-6">n.{el?.quantity}</span>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Container>
                            <Button className="m-3" onClick={(): void => { setCartItem(item); confirmOrder() }} >Riordina ora</Button>
                        </div>
                    ))}
                </div>
            </Container> : null
            }
        </>
    )
}

export default Order