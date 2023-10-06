import './App.scss';
import cart from './images/icon-cart.svg';
import product from './images/image-product-mobile.jpg';


export default function Mobile () {
    return(
      <div className='mobile'>
        <div className='content-mobile'>
        <Top />
        <Bottom />
        </div>
      </div>
    )
  }
  
  const Top = () => {
    return(
      <div className='top'>
        <img className="images-mobile" src={product} alt='product'/>
      </div>
    )
  }
  
  const Bottom = () => {
    return(
      <div className='bottom'>
        <div className='content-mobile'>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className='price-mobile'>
            <h1>$149.99</h1>
            <p>$169.99</p>
        </div>
        <button><img src={cart} alt='cart'/>Add to Cart</button>
        </div>
      </div>
    )
  }