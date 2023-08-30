import './BreakfastStyles.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';


export default function BreakfastData(props) {
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    return (
        <div className={props.className}>
            <div className='des-text'>
                <p>{props.heading}</p>
                <h2>{props.text}</h2>
            </div>
            <div className='image'>
                <img alt="recipe" src={props.img} />
            </div>
            <div className='video-btn'>
                <button onClick={handleMoreClick} className='btn'>
                    {showMore ? 'Hide' : 'Show'}
                    </button>
            </div>
                    {showMore &&< ReactPlayer  url={props.url} height={200} width={300} />}

        </div>
    )
}
