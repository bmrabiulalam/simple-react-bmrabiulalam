import React from 'react';
import AddedPlayer from '../AddedPlayer/AddedPlayer';

const Count = (props) => {
    return (
        <div>
            <div className="border-bottom border-darken-4 pb-3 mb-3">
                <h4><strong>Your Team</strong></h4>
            </div>
            <div>
                <p><strong>Your Team Size: {props.addedPlayer.length}</strong></p>
                <p>
                    <strong>Expected Budget: ₹
                        {
                            props.addedPlayer.reduce( (total, player) => total + player.auctionMoney, 0)
                        }
                    </strong>
                </p>
                <div className="mt-4 border-top border-darken-4 pt-3">
                    <p style={{alignSelf: 'center', marginBottom: '10px'}}><strong>Selected Players</strong></p>
                    {
                        props.addedPlayer.map(player => <AddedPlayer addedPlayer={player}></AddedPlayer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Count;