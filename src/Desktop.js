import './App.scss';
import cart from './images/icon-cart.svg';
import product from './images/image-product-desktop.jpg';


export default function Desktop () {
    return(
      <div className='desktop'>
        <Left />
        <Right />
      </div>
    )
  }
  
  const Left = () => {
    return(
      <div className='left'>
        <img className="images" src={product} alt='product'/>
      </div>
    )
  }
  
  const Right = () => {
    return(
      <div className='right'>
        <div className='content'>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className='price'>
            <h1>$149.99</h1>
            <p>$169.99</p>
        </div>
        <button><img src={cart} alt='cart'/>Add to Cart</button>
        </div>
      </div>
    )
  }