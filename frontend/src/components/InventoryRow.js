import React from 'react';
import InventoryQuantity from './InventoryQuantity';




function InventoryRow({ item }) {
    return (
        <tr>
            <td>{item.company}</td>
            <td>{item.product} </td>
            <td class="table_numbers">
                {item.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                    maximumFractionDigits: 2,
                })}
            </td>
            <td><InventoryQuantity /> </td>
        </tr>
    );
}



export default InventoryRow;


