import Image from "next/image";

export default function ItemCard({name, price, star, image}: {
    name: string,
    price: string,
    star: number,
    image: string
}) {
    const starNum = Math.max(1, Math.min(star || 1, 5))

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <Image className="card-img-top" src={image} alt={name} width={258} height={258}/>
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
