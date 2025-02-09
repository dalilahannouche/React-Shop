function OrderDetails({productsInBag}){

      function calculateTotal(){
          let orderTotal = 0;
          productsInBag.forEach(item => {
              orderTotal += item.price * item.quantity;
          });
          return orderTotal.toFixed(2);
      }

    //Filtrer uniquement les produits avec quantité > 0
    //Filtrer uniquement les produits avec quantité > 0


    
    return(

        <>
            <section className="summary">
                    <strong>Order Summary</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {productsInBag.map(item=> 
                            //  Calling the Item Element qui se trouve dans le fichier Item.jsx
                            <tr>
                                <td>{item.quantity}x {item.name}</td>
                                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )}
                            
                            
                            <tr>
                                <th>Total</th>
                                <th>$ {calculateTotal()}</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
        </>
    )
}

export default OrderDetails