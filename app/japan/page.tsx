import Navigation from "@/components/Navigation";
import Image from "next/image";

import japanImage from "/public/assets/japan/japan.png"
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Navigation />
            <header className="bg-dark py-3">
                <div className="container px-4 px-lg-5 my-3">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">일본</h1>
                                <p className="lead fw-normal text-white-50 mb-4">일본의 돈키호테 등에서 꼭 사야 할 인기 상품을 소개합니다. 쇼핑
                                    리스트에 빠질 수 없는 현지 상품을 한눈에 확인하세요!</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <Image className="img-fluid rounded-3 my-5" src={japanImage} alt="일본" />
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-12">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                        className="bi bi-cart3"></i></div>
                                    <h2 className="h5 fw-bolder">돈키호테</h2>
                                    <p>선물용 인기 기념품부터 생활용품까지 꼭 사야 할 추천템 소개</p>
                                    <Link className="text-decoration-none" href="/japan/donki">
                                        돈키호테 추천 상품 보기
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                        className="bi bi-handbag"></i></div>
                                    <h2 className="h5 fw-bolder">패션</h2>
                                    <p>트렌디한 아이템을 더 저렴하게! 인기 패션 브랜드의 실속 있는 할인 정보</p>
                                    <Link className="text-decoration-none" href="/japan/fashion">
                                        패션 추천 브랜드 보기
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
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
