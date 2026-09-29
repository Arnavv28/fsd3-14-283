const h1 = {
  picUrl:"https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg",
  bname:"React Design Patten",
  price:1199,
  quantity:10,
  rating:5.0,
};

function Book(){
  return (
    <div>
      <img 
        src = {h1.picUrl}
        alt = {h1.bname}
      />
      <h1>{h1.name}</h1>
      <h2>Price:{h1.price}</h2>
      <h3>Quantity: {h1.quantity}</h3>
      <h4>rating : {h1.rating}</h4>
    </div>
  );
}

export default function App(){
  return (
    <>
      <Book/>
      <h1>Hello React</h1>
      <Book/>
      <Book/>
      <Book/>
    </>
  )
}