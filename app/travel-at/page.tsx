import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation/>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">Travel At</h1>
                                <p className="lead text-white-50 mb-4">Travel At 과 함께 전 세계 여행지의 필수 구매 아이템을 만나보세요. 현지의
                                    특별한 인기 상품을 소개해드립니다.</p>
                                <p className="lead text-white-50 mb-4">여행지 인기 상품과 가격 정보를 정리하는 데 시간이 오래걸려, 여러분께 도움이 될 수
                                    있도록 정리해두었습니다. 부족한 정보는 신속히 업데이트하겠습니다. 많은 관심과 지원 부탁드립니다.</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <a className="btn btn-outline-light btn-sm px-4" href="mailto:1k2m3g4@gmail.com">정보
                                        추가 요청</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*Features section*/}
            <section className="py-5 border-bottom" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">🇯🇵</div>
                            <h2 className="h4 fw-bolder">일본</h2>
                            <p>일본의 돈키호테 등에서 꼭 사야 할 인기 상품을 소개합니다. 쇼핑 리스트에 빠질 수 없는 현지 상품을 한눈에 확인하세요!</p>
                            <a className="text-decoration-none" href="/japan/donki">
                                추천 상품 보기
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5">
                <div className="container px-5 my-5 px-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                            className="bi bi-envelope"></i></div>
                        <h2 className="fw-bolder">꿀팁 알리기</h2>
                        <p className="lead mb-0">어머, 이건 꼭 사야 해!</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="d-grid"><a className="btn btn-outline-primary"
                                                       href="mailto:1k2m3g4@gmail.com">알려주기</a></div>
                        </div>
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
