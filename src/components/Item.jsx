function Item({items, produit, selectProduct, changeQuantity}){  // {item, selectProduct} there are arguments of the function (Props)
    
    return(

        <>
            <div onClick={()=>selectProduct(produit.id)} className={`product ${produit.isInBag? 'selected' : '' }`}>
            {/* En React, on évite d’écrire directement du code dans le composant enfant.
            👉 Le composant enfant (Item.jsx) ne prend que la décision d’appeler selectProduct,
                mais il ne décide pas de ce que cette fonction doit faire.
                 */}
                <div className="photo">
                    <img src={"./img/" + produit.photo}/>
                </div>
                <div className="description">
                    <span className="name">{produit.name}</span>
                    <span className="price">$ {produit.price}</span>
                    
                    { produit.isInBag && 
                        <div className="quantity-area">
                            <button disabled={produit.quantity<0} onClick={(e)=> changeQuantity(e, produit.id, -1 )}>-</button>
                            <span className="quantity">{produit.quantity}</span>
                            <button onClick={(e)=>changeQuantity(e, produit.id, +1)}>+</button>
                        </div>

                    } 

                </div>
            </div>
        </>
    )
}

export default Item