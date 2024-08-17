import ItemCard from "@/components/ItemCard";
import Navigation from "@/components/Navigation";

export default function Page() {
    const data = [
        { name: '곤약 젤리', price: '¥259', star: 5, image: '/travel-at/assets/japan/donki/item1.png' },
        { name: '부르봉 알포트 초코', price: '¥299', star: 5, image: '/travel-at/assets/japan/donki/item2.png' },
        { name: '부르봉 루만도', price: '¥279', star: 5, image: '/travel-at/assets/japan/donki/item3.png' },
        { name: '파이노미', price: '¥239', star: 5, image: '/travel-at/assets/japan/donki/item4.png' },
        { name: '랑그리', price: '¥179', star: 5, image: '/travel-at/assets/japan/donki/item5.png' },
        { name: '푸딩 젤리', price: '¥203', star: 5, image: '/travel-at/assets/japan/donki/item6.png' },
        { name: '크리미 치즈', price: '¥259', star: 5, image: '/travel-at/assets/japan/donki/item7.png' },
        { name: 'S&B 골든 카레', price: '¥259', star: 5, image: '/travel-at/assets/japan/donki/item8.png' },
        { name: '산토리 위스키', price: '¥1,500', star: 5, image: '/travel-at/assets/japan/donki/item9.png' }
    ];

    return (
        <>
            <Navigation/>
            <header className="bg-dark py-3">
                <div className="container px-4 px-lg-5 my-3">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">돈키호테</h1>
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
                                        className="bi bi-ticket-perforated"></i></div>
                                    <h2 className="fs-4 fw-bold">할인 쿠폰 적용 방법</h2>
                                    <p>카카오톡에서 '돈키쿠폰' 친구 추가하고 5% 할인쿠폰을 바로 받아보세요!</p>
                                    <a className="btn btn-outline-primary btn-sm" href="https://pf.kakao.com/_vsLxnxj"
                                       target="_blank">할인 쿠폰 받기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {/*TODO : travel-at 링크 제거*/}
                        {data.map((item) => (
                            <ItemCard name={item.name} price={item.price} star={item.star} image={item.image} />
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
