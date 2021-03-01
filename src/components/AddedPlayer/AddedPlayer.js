import React from 'react';

const AddedPlayer = (props) => {
    const {image, name, auctionMoney} = props.addedPlayer;
    return (
        <div className="row-cols shadow-sm rounded-3 p-1 mb-2 d-flex">
            <div className="col-4">
                <img style={{height: "70px", borderRadius: '6px'}} src={image} alt=""/>
            </div>
            <div className="col ms-4">
                <p>{name}</p>
                <p>₹{auctionMoney}</p>
            </div>
        </div>
    );
};

export default AddedPlayer;