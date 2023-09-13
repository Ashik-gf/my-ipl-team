
import { useEffect, useState } from 'react';
import '../css/Home.css'

const Home = () => {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch("player.json")
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    return (
        <div className='home'>
           <div className="container">
            <div className="card-container">
                {
                    players.map(player =>(
                        <div className='small-cart'>
                            <img className='img' src={player.photos}></img>
                            <h4>{player.name}</h4>
                            <h3>Salerry:{player.salary}</h3>
                            <button className='btn'>Select</button>
                        </div>
                    ))
                }

            </div>
            <div className="cart">
                <h4>Cart</h4>
            </div>
           </div>
        </div>
    );
};

export default Home;