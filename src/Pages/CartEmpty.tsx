import LoaderWithBackground from "../components/LoaderWithBackground.tsx";

const CartEmpty = () => {
    return (
        <section>
            <LoaderWithBackground visible={false}/>
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart-section">
                        <div
                            id="lottie-container"
                            style={{ width: 360, height: 400, margin: "0 auto" }}
                        />
                        <h3 className="text-center">Your shopping cart is empty!</h3>
                        <div className="empty-cart-action">
                            <a href="listing-course.html" className="primery-btn btn w-100">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartEmpty;