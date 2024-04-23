import './App.css'
import { useState } from 'react'

export function TwiterFollowCard({userName, name, initialIsFollowing}) {
    /* const state = useState(false)
        const isFollowing = state[0] //Contiene el valor del estado actual
        const setFollowing = state[1] //Actualiza el valor del estado
     */
    const[isFollowing, setFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-follow' : 'tw-followCard-button'

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-header-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar" />
                <div className='tw-followCard-header-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-header-infouserName '>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}