import './App.css';
import OrderDetails from './components/OderDetails';
import Item from './components/Item';
import { useState } from 'react';


function App() {

    const shopName = "Jersey Shop Made with React JS";

    const [items,setItems] = useState(
    [
        {
            
            id: 1, 
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {

            id: 2, 
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 0, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 0, 
            isInBag: false
        }
    
    ]
    );

   
    //les quantités qui seront supérieurs à 1 s'ajouteront au panier, si c'est 0
    // cela ne s'ajoutera pas
    const itemsInBag = items.filter(item => item.isInBag && item.quantity > 0);

    
      function selectHandler(id){
          let item = items.filter(item => item.id === id)[0]; // [0]  extrait le 1er elemnt du tableau,
          //  qui est déjà un objet.
          

          item.isInBag = !item.isInBag; 
          //Si l'utilisateur clique sur un produit qui n'est pas dans le sac (isInBag: false), on 
          // le met dans le sac (isInBag: true). Si l'utilisateur reclique, on le retire (isInBag: false).


          //item est une référence à l’objet modifié, donc quand on le réinjecte dans setItems,
          //  il contient déjà isInBag mis à jour !
          setItems(items.map(el => el.id===id ? item : el));
          //setItems([...]) remplace complètement items avec un nouveau tableau.
          //React détecte ce changement et met à jour l’affichage.


      }

    
    
      function quantityHandler(e, id, increment){
          e.stopPropagation();
          let item = items.filter(item => item.id === id)[0]; 
          item.quantity += increment; 

          setItems(items.map(el => el.id===id ? item : el));
      }

    // Incrémenter ou décrémenter la quantité et mettre à jour isInBag
    
    
    
    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>
                
                {items.map(item=> 
                    //  Calling the Item Element qui se trouve dans le fichier Item.jsx
                    <Item
                        selectProduct={(id) => selectHandler(id)}
                        produit={item} //On envoie l’objet item en tant que prop au composant Item.
                        changeQuantity={(e, id, increment)=>quantityHandler(e, id, increment)}
                        key={item.id} // To avoid the error "Each child should have a unique 'Key' Prop"
                    />

                )}
                
            </section>
            
            {itemsInBag.length > 0 && <OrderDetails productsInBag={itemsInBag} />}
            
            
        </>
    );
}

export default App
