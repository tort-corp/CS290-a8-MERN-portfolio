import React from 'react';
import InventoryRow from '../components/InventoryRow.js';
import products from '../data/products.js';

function OrderingPage( {products}) {
    return (
        <div>
        
        <h2>Item Order</h2>

        <article>
            <h3>A demo ordering page</h3>
            <p>
                Select up to 10 of each item. 
            </p>

            <table>
                <caption>Please select <strong>ONE</strong>
                    option per order.</caption>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Today's Price</th>
                        <th>Selection</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((inventoryProduct, index) => 
                    <InventoryRow
                    item={inventoryProduct}
                    key={index}
                    />
                    )}
                </tbody>
                {/* <tfoot>


                </tfoot> */}

            </table>
        </article>
        
        </div>

        );
    }
    
    export default OrderingPage;

