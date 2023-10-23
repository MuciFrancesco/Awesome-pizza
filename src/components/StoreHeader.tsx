//@ts-nocheck
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useShoppingCart } from '../context/StoreProvider';
import { FaLeaf } from "react-icons/fa"
import { IconContext } from "react-icons/lib";


function StoreHeader() {

    const { radios, vegetarianMenu, radioValue, setRadioValue, changeObj, vegetarian } = useShoppingCart()


    return (
        <div className='store-header'>
            <ButtonGroup >
                {radios.map((radio, i) => (
                    <ToggleButton
                        key={radio.id}
                        id={`radio-${i}`}
                        type="radio"
                        variant='success'
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        onClick={() => changeObj(radio.el)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}

            </ButtonGroup>
            <Form className="d-flex">
                <Form.Check type='switch' isValid={true} value={vegetarian ? true : false} label="Vegetariano" className="store-header-toggle fw-bold fs-6 text-black-50" onClick={() => vegetarianMenu()} />
                <IconContext.Provider value={{ color: "green", size: '20px' }}>
                    <FaLeaf />
                </IconContext.Provider>
            </Form>

        </div >
    )
}

export default StoreHeader