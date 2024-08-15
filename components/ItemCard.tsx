export default function ItemCard({name, price, star, image}) {
    const starNum = Math.max(1, Math.min(parseInt(star, 10) || 1, 5))

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={name}/>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{name}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {Array.from({length: starNum}).map((_, i) => (
                                <div className="bi-star-fill"></div>
                            ))}
                        </div>
                        {price}
                    </div>
                </div>
            </div>
        </div>
    );
}
