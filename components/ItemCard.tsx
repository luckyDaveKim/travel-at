import Image from "next/image";

export default function ItemCard({key, name, price, star, imageSrc, blur}: {
    key: string,
    name: string,
    price?: string,
    star?: number,
    imageSrc: any,
    blur?: boolean,
}) {
    const starNum = Math.max(1, Math.min(star || 1, 5))

    return (
        <div className="col mb-5" key={key}>
            <div className="card h-100">
                <Image className="card-img-top"
                       src={imageSrc}
                       alt={name}
                       width={200}
                       height={200}
                       sizes="200px"
                       placeholder={blur ? "blur" : undefined}
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{name}</h5>
                        {!!star && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                {Array.from({length: starNum}).map((_, i) => (
                                    <div className="bi-star-fill" key={`${key}-star-${i}`}></div>
                                ))}
                            </div>
                        )}
                        {!!price && (price)}
                    </div>
                </div>
            </div>
        </div>
    );
}
