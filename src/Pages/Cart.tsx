import Frame3403 from '../assets/img/Frame 3403.png'
import Visa from '../assets/img/Visa.png'
import Mastercard from '../assets/img/Mastercard.png'
import PayPal from '../assets/img/PayPal.png'
import GooglePay from '../assets/img/GooglePay.png'
import GooglePay1 from '../assets/img/GooglePay-1.png'
import LoaderWithBackground from '../components/LoaderWithBackground.tsx'
const Cart = () => {
    return (
        <section>
            <LoaderWithBackground visible={false}/>
            <div className="cart-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 mb-4">
                            <div className="cart-page-items">
                                <ul className="cart-items-list">
                                    <li>
                                        <div className="cart-item-card">
                                            <div className="cart-item-image">
                                                <img
                                                    src={Frame3403}
                                                    alt="#"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="cart-item-card-mid order-3 order-sm-2">
                                                <h3 className="cart-item-name">
                                                    How Things Work: AnIntroduction to Physics
                                                </h3>
                                                <p className="cart-item-price">
                                                    ₹ 2000 <span>₹ 2500</span>
                                                </p>
                                            </div>
                                            <div className="cart-item-delete ms-auto order-2 order-sm-3">
                                                <button className="cart-item-remove-btn">
                                                    <i className="fa-solid fa-trash-can" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-item-card">
                                            <div className="cart-item-image">
                                                <img
                                                    src={Frame3403}
                                                    alt="#"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="cart-item-card-mid order-3 order-sm-2">
                                                <h3 className="cart-item-name">
                                                    How Things Work: AnIntroduction to Physics
                                                </h3>
                                                <p className="cart-item-price">
                                                    ₹ 2000 <span>₹ 2500</span>
                                                </p>
                                            </div>
                                            <div className="cart-item-delete ms-auto order-2 order-sm-3">
                                                <button className="cart-item-remove-btn">
                                                    <i className="fa-solid fa-trash-can" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-item-card">
                                            <div className="cart-item-image">
                                                <img
                                                    src={Frame3403}
                                                    alt="#"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="cart-item-card-mid order-3 order-sm-2">
                                                <h3 className="cart-item-name">
                                                    How Things Work: AnIntroduction to Physics
                                                </h3>
                                                <p className="cart-item-price">
                                                    ₹ 2000 <span>₹ 2500</span>
                                                </p>
                                            </div>
                                            <div className="cart-item-delete ms-auto order-2 order-sm-3">
                                                <button className="cart-item-remove-btn">
                                                    <i className="fa-solid fa-trash-can" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="cart-page-right">
                                <div className="cart-detail-card mb-4">
                                    <h4>Cart (2 Items)</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Total</td>
                                                <td>INR 50,000</td>
                                            </tr>
                                            <tr>
                                                <td>Net Total</td>
                                                <td>INR 50,000</td>
                                            </tr>
                                            <tr>
                                                <td>GST (18%)</td>
                                                <td>INR 50,000</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td>INR 12,000</td>
                                            </tr>
                                            <tr>
                                                <th>Amount Due</th>
                                                <th>INR 12,000</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="pay-throw-images">
                                        <img src={Visa} alt="#" className="trans-img" />
                                        <img
                                            src={Mastercard} 
                                            alt="#"
                                            className="trans-img"
                                        />
                                        <img
                                            src={PayPal}
                                            alt="#"
                                            className="trans-img"
                                        />
                                        <img
                                            src={GooglePay}
                                            alt="#"
                                            className="trans-img"
                                        />
                                        <img
                                            src={GooglePay1}
                                            alt="#"
                                            className="trans-img"
                                        />
                                    </div>
                                    <div className="note-cart-items">
                                        <p className="text-center">
                                            Safe and secure payment | 100% Authentic resources
                                        </p>
                                    </div>
                                </div>
                                <div className="cart-action-btn">
                                    <a href="#" className="primery-btn btn w-100">
                                        Pay INR 12,000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;