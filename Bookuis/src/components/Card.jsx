function Card({imageUrl, title, imdbLink, year}) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image"/>
            <div className="card-content">
                <h2 className="card-title">{title} ({year})</h2>
                <a className="card-link " href={imdbLink} target="_blank">Autor Name</a>   
            </div>
        </div>
    )
}
export default Card