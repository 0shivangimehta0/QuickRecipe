import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Quick Recipe</h1>
                    <p>Start a day with a healthy meal.</p>

                </div>
                <div>
                    <a href="/"></a>
                    <i className="fa-brands fa-instagram-square"></i>
                    <a href="/"></a>
                    <i className="fa-brands fa-twitter-square"></i>
                    <a href="/"></a>
                    <i className="fa-brands fa-facebook-square"></i>
                </div>
            </div>
        </div>

    )
}
export default Footer;