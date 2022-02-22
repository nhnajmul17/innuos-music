import React from 'react';
import './Album.css'

const Album = (props) => {
    const { cover, album, artist, source } = props.album
    return (
        <div className='album'>

            {(cover !== null) ?
                <img src={`./covers/${cover} `} alt="coverImg" /> :
                <img src="./images//undefined_album_cover.png" alt="coverImg" />
            }
            {source === "QOBUZ" && (
                <img src={"./images/qobuz.png"} alt="sourceImg" className="logo" />
            )}

            <p className='album-name' >{album}</p>
            <span className='artist'>{artist}</span>
        </div>
    );
};

export default Album;