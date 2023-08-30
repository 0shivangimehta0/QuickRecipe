import "./HeroStyles.css";
export default function Hero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt ="heroimg" src={props.heroImg}
            />

            <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            </div>
            <div className="para">
            <p>{props.para}</p>
            </div>
        </div>
        </>
    )
}