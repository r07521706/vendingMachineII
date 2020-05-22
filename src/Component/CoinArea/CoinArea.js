import React from 'react'
import coin50 from '../../pic/coin50.jpg';
import coin10 from '../../pic/coin10.jpg'
import coin5 from '../../pic/coin5.jpg'
import coin1 from '../../pic/coin1.jpg'
import DragCard from '../DragCard/DragCard';
export default function CoinArea() {
    return (
        <div className="coin-area">
        <DragCard>
            <div className="coin" >
                <img src={coin50} alt="Background"  id="50" style={{height:'100%',width:'100%',background:"#255784"}} />
            </div>
        </DragCard>
        <DragCard>
            <div className="coin">
                <img src={coin10} alt="Background" id="10" style={{height:'85%',width:'90%',marginTop:5,background:"#255784"}} />
            </div>
        </DragCard>
        <DragCard>
            <div className="coin">
                <img src={coin5} alt="Background" id="5" style={{height:'70%',width:'80%',marginTop:15,background:"#255784"}} />
            </div>
        </DragCard>
        <DragCard>
            <div className="coin">
                <img src={coin1} alt="Background" id="1" style={{height:'60%',width:'65%',marginTop:20,background:"#255784"}} />
            </div>
        </DragCard>
    </div>
    )
}
