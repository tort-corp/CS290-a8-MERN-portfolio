import React, {useState} from 'react'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function InventoryQuantity() {
    const [amount, setAmount] = useState(0);

    const more = () => setAmount(amount === 10 ? amount : amount + 1)
    const less = () => setAmount(amount === 0 ? 0 :amount -1)

    return (
        <div>
            <GoTriangleDown onClick={less} />
            <span> {amount} </span>
            <GoTriangleUp onClick={more} />
        </div>
    );

}


export default InventoryQuantity;

