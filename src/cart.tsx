export default function cart(){
    let counter = 0
    const handleCard = () =>{
        counter = counter+1;
    } 
    return (
        <div>
            <h2>Shopping cart</h2>
            <p>Item in the cart : {counter}</p>
            <button onClick={handleCard}>buy naw</button>
        </div>
    )
}