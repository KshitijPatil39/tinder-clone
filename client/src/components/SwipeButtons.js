import React from 'react';
import "../css/SwipeButtons.css";
import Replayicon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
            <Replayicon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
            <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>
            </div>
    )
}

export default SwipeButtons;
