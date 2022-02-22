import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Album from '../../Components/Album/Album';
import { fetchAlbums, setAlbums } from '../../Redux/AlbumSlice/AlbumSlice';
import './AlbumHome.css'

const AlbumHome = () => {

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    const data = useSelector(state => state.album.albums)
    const album = useSelector(state => state.album.filterItems)


    const handleSource = e => {
        const source = e.target.value

        if (source !== '') {
            const newData = album.filter(pd => pd.source === source)
            dispatch(setAlbums(newData))
        }

        else if (source === '') {
            dispatch(setAlbums(album))
        }

    }

    return (
        <div className='Container'>
            {
                !show && <button type='button' className='getAlbumBtn' onClick={() => setShow(true)}>Get Albums</button>
            }

            {

                show && <div>
                    <div className="filterSource">
                        <label htmlFor="source">Filter by:</label>
                        <select name="source" id="source" onChange={handleSource} >
                            <option value="">All</option>
                            <option value="LOCAL">Local</option>
                            <option value="QOBUZ">Qobuz</option>
                        </select>
                    </div>

                    <div className="albumContainer">
                        {
                            data.map(pd => <Album album={pd} key={pd.id}></Album>)
                        }

                    </div>
                </div>

            }

        </div >
    );
};

export default AlbumHome;