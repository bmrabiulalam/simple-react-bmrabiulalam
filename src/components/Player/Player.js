import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {
        name, 
        cricinfoPlayerPage, 
        battingStyle, 
        bowlingStyle, 
        playingRole, 
        image, 
        majorTeams, 
        auctionMoney, 
        country
    } = props.player;

    return (
        <div className="card ms-3 mb-3" style={{width: "20rem"}}>
            <img src={image} style={{width: "120px", alignSelf:'center'}} className="card-img-top mt-2" alt={name + ' photo.'}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><small><strong>Country:</strong> {country}</small></li>
                    <li className="list-group-item"><small><strong>Auction Money:</strong> ₹{auctionMoney}</small></li>
                    <li className="list-group-item"><small><strong>Batting Style:</strong> {battingStyle}</small></li>
                    <li className="list-group-item"><small><strong>Bowling Style:</strong> {bowlingStyle}</small></li>
                    <li className="list-group-item"><small><strong>Playing Role:</strong> {playingRole}</small></li>
                    <li className="list-group-item"><small><strong>Major Teams:</strong> {majorTeams}</small></li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <a target="_blank" href={cricinfoPlayerPage} className="btn btn-primary"><small>CricInfo Profile</small></a>
                <button onClick={() => props.handleClick(props.player)} className="btn btn-primary">
                    <small><FontAwesomeIcon icon={faUserPlus} /> Add Player</small>
                </button>
            </div>
        </div>
    );
};

export default Player;