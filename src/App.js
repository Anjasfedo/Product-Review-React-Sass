// import logo from './logo.svg';
import './App.scss';
import cart from './images/icon-cart.svg'
import product from './images/image-product-desktop.jpg'

export default function App() {
  return (
    <div>
      <Desktop />
    </div>
  );
}

const Desktop = () => {
  return(
    <div className='card'>
      <Left />
      <Right />
    </div>
  )
}

const Left = () => {
  return(
    <div className='left'>
      <img src={product} alt='product' id='images'/>
    </div>
  )
}

const Right = () => {
  return(
    <div className='right'>
      <div className='content'>
      <h3>PERFUME</h3>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <Price />
      <Button />
      </div>
    </div>
  )
}

const Price = () => {
  return (
    <div className='price'>
      <h1>$149.99</h1>
      <p>$169.99</p>
    </div>
  )
}

const Button = () => {
  return(
    <div className='button'>
      <button><img src={cart} alt='cart'/>Add to Cart</button>
    </div>
  )
}