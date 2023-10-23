
import { Alert, Button, ButtonGroup, Col, Row, ToggleButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/lib/styles.scss"
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/StoreProvider';





function Payment() {

    const { handleChange, handleFocus, handleSubmit, values, errors, valuesUser, errorsUser, cardPayment, setcardPayment, setLocalPayment, localPayment } = useForm()

    const { cartItem } = useShoppingCart()






    return (
        <>

            {cartItem.length > 0 ?
                <div className='payment-container'>
                    <h2>Conferma dati di pagamento</h2>
                    <div className='payment-div'>
                        <Form onSubmit={(e) => handleSubmit(e)}>

                            <div className='payment-header'>
                                <ButtonGroup >

                                    <ToggleButton
                                        type="radio"
                                        variant='success'
                                        name="radio-payment"
                                        checked={cardPayment === false && localPayment === false}
                                        onClick={() => { setLocalPayment(false); setcardPayment(false); }} id={''} value={''}>
                                        Pagamento in contanti
                                    </ToggleButton>
                                    <ToggleButton
                                        type="radio"
                                        variant='success'
                                        name="radio-payment"
                                        checked={cardPayment === true && localPayment === false}
                                        onClick={() => { setLocalPayment(false); setcardPayment(true); }} id={''} value={''}>
                                        Pagamento con Carta
                                    </ToggleButton>
                                    <ToggleButton
                                        type="radio"
                                        variant='success'
                                        name="radio-payment"
                                        checked={localPayment === true}
                                        onClick={() => { setcardPayment(false); setLocalPayment(true); }} id={''} value={''}>
                                        Ritiralo all'locale
                                    </ToggleButton>

                                </ButtonGroup>

                            </div >

                            <Form.Group>
                                <Form.Label>Nome e cognome:</Form.Label>
                                <Form.Control
                                    type="text"
                                    id='userName'
                                    name='userName'
                                    value={valuesUser.userName}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    isValid={errorsUser.csetName}
                                    required
                                    placeholder="Inserisci nome e cognome" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Numero di telefono:</Form.Label>
                                <Form.Control
                                    type="phone"
                                    id='userNumber'
                                    name='userNumber'
                                    value={valuesUser.userNumber}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    isValid={errorsUser.cuserNumber}
                                    required
                                    placeholder="Inserisci il tuo numero di telefono" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={valuesUser.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    isValid={errorsUser.cemail}
                                    required
                                    placeholder="Inserisci la tua Email" />
                            </Form.Group>
                            {!localPayment && <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Via</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id='road'
                                            name='road'
                                            value={valuesUser.road}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            isValid={errorsUser.croad}
                                            required
                                            placeholder="Inserisci la tua via" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Numero via:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            id='roadNumber'
                                            name='roadNumber'
                                            value={valuesUser.roadNumber}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            isValid={errorsUser.croadNumber}
                                            required
                                            placeholder="N." />
                                    </Form.Group>
                                </Col>
                            </Row>}
                            {cardPayment ? errorsUser.show && <Alert id='alertMessage' variant={errorsUser.variant} show={errorsUser.show}>
                                {errorsUser.message}
                            </Alert> : null}
                            {cardPayment && !localPayment ?
                                <>
                                    <h4 className='d-flex mt-4 justify-content-center'>Dati pagamento con Carta</h4>
                                    <Cards
                                        number={values.number}
                                        name={values.name}
                                        expiry={values.expiry}
                                        cvc={values.cvc}
                                        focused={values.focus}
                                    />
                                    <div>
                                        <Form.Group>
                                            <Form.Label>Nome e cognome:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id='name'
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cname}
                                                required
                                                placeholder="Inserisci nome e cognome" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Numero carta:</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                id='number'
                                                name='number'
                                                value={values.number}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cnumber}
                                                placeholder="Inserisci il tuo numero carta"
                                                required
                                                maxLength={16}
                                            />
                                        </Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label>Scadenza:</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        id='expiry'
                                                        name='expiry'
                                                        value={values.expiry}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        isValid={errors.cexpiry}
                                                        placeholder="Inserisci data scadenza carta"
                                                        required
                                                        maxLength={4}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Label> CVC :</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        id='cvc'
                                                        name='cvc'
                                                        value={values.cvc}
                                                        onChange={handleChange}
                                                        onFocus={handleFocus}
                                                        isValid={errors.ccvc}
                                                        placeholder="CVC"
                                                        required
                                                        maxLength={3}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" type='submit' className='btn btn-primary mt-4 mb-4' >
                                            Conferma pagamento
                                        </Button>
                                        {errors.show && !localPayment && <Alert id='alertMessage' variant={errors.variant} show={errors.show}>
                                            {errors.message}
                                        </Alert>}


                                    </div>
                                </>
                                :
                                <>
                                    <Button variant="primary" type='submit' className='btn btn-primary mt-4 mb-4' >
                                        Conferma pagamento
                                    </Button>
                                    {errorsUser.show && <Alert id='alertMessage' variant={errorsUser.variant} show={errorsUser.show}>
                                        {errorsUser.message}
                                    </Alert>}
                                </>}
                        </Form>


                    </div>
                </div>

                :
                <div>
                    <h1>Nessun elemento nel carrello.</h1>
                    <h2>Vai allo shop per ordinare i tuoi piatti preferiti!</h2>
                    <Link to={"/store"} >Ordina ora</Link>
                </div>
            }


        </>
    )
}

export default Payment


