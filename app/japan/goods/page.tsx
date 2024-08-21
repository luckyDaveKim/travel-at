import ItemCard from "@/components/ItemCard";
import Navigation from "@/components/Navigation";

export default function Page() {
    const data = [
        {name: '월드 트레블 어댑터 키트', price: '¥4,780', imageSrc: require('@/public/assets/japan/goods/apple-world-travel-adapter-kit.jpg')}
    ];

    return (
        <>
            <Navigation />
            <header className="bg-dark py-3">
                <div className="container px-4 px-lg-5 my-3">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">잡화</h1>
                    </div>
                </div>
            </header>
            {/*Page Content*/}
            <section className="pt-4">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-lg-5 justify-content-center">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i
                                        className="bi bi-info-circle"></i></div>
                                    <h2 className="fs-4 fw-bold">특별 상품</h2>
                                    <p>일본에서 만날 수 있는 독특한 소품과 인테리어 용품을 저렴하게 구매할 절호의 기회!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((item) => (
                            <ItemCard key={`item-card-${item.name}`} name={item.name} price={item.price}
                                      imageSrc={item.imageSrc} blur={true} />
                        ))}
                    </div>
                </div>
            </section>
            {/*Footer*/}
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Travel At 2024</p>
                </div>
            </footer>
        </>
    );
}
