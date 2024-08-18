import ItemCard from "@/components/ItemCard";
import Navigation from "@/components/Navigation";

export default function Page() {
    const data = [
        {name: '샤넬', imageSrc: require('@/public/assets/japan/fashion/chanel.svg')},
        {name: '셀린느', imageSrc: require('@/public/assets/japan/fashion/celine.svg')},
        {name: '비비안 웨스트우드', imageSrc: require('@/public/assets/japan/fashion/vivienne-westwood.svg')},
        {name: '크롬하츠', imageSrc: require('@/public/assets/japan/fashion/chrome-hearts.svg')},
        {name: '꼼데가르송', imageSrc: require('@/public/assets/japan/fashion/comme-des-garcons.svg')},
        {name: '휴먼메이드', imageSrc: require('@/public/assets/japan/fashion/human-made.svg')},
        {name: '슈프림', imageSrc: require('@/public/assets/japan/fashion/supreme.svg')},
        {name: '메종키츠네', imageSrc: require('@/public/assets/japan/fashion/maison-kitsune.svg')},
        {name: '요시다 포터', imageSrc: require('@/public/assets/japan/fashion/yoshida-porter.svg')},
        {name: '보테가베네타', imageSrc: require('@/public/assets/japan/fashion/bottega-veneta.svg')},
        {name: '러쉬', imageSrc: require('@/public/assets/japan/fashion/lush.svg')},
        {name: '프라이탁', imageSrc: require('@/public/assets/japan/fashion/freitag.svg')},
        {name: '겐조', imageSrc: require('@/public/assets/japan/fashion/kenzo.svg')},
        {name: '단톤', imageSrc: require('@/public/assets/japan/fashion/danton.svg')},
        {name: '코스', imageSrc: require('@/public/assets/japan/fashion/cos.svg')},
        {name: '베이프', imageSrc: require('@/public/assets/japan/fashion/bape.svg')},
        {name: '메종 미하라 야스히로', imageSrc: require('@/public/assets/japan/fashion/maison-mihara-yasuhiro.svg')}
    ];

    return (
        <>
            <Navigation />
            <header className="bg-dark py-3">
                <div className="container px-4 px-lg-5 my-3">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">패션</h1>
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
                                        className="bi bi-cash-coin"></i></div>
                                    <h2 className="fs-4 fw-bold">할인률 30~40%</h2>
                                    <p>최대 할인! 인기 브랜드의 최신 세일 정보를 모아 놓은 필수 쇼핑 가이드!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((item, i) => (
                            <ItemCard key={`item-card-${i}`} name={item.name} imageSrc={item.imageSrc} />
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
