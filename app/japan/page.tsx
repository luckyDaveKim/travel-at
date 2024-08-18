'use client'

import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {range} from 'lodash'

import ItemCard from "@/components/ItemCard";

import japanImage from "/public/assets/japan/japan.png"

const maxItemSizeByPage = 12;

class Tag {
    constructor(public key: string, public name: string) {
        this.key = key;
        this.name = name;
    }
}

const TAGS = {
    donky: new Tag('donky', '돈키호테'),
    fashion: new Tag('fashion', '패션'),
    jelly: new Tag('jelly', '젤리'),
    snack: new Tag('snack', '과자'),
    cooking: new Tag('cooking', '요리'),
    alcohol: new Tag('alcohol', '주류')
}
const tags = Object.values(TAGS).sort((a, b) => a.name < b.name ? -1 : 1);

const DATA = [
    {name: '곤약 젤리', price: '¥259', star: 5, imageSrc: require('@/public/assets/japan/donki/item1.png'), blur: true, tags: [TAGS.donky, TAGS.jelly]},
    {name: '부르봉 알포트 초코', price: '¥299', star: 5, imageSrc: require('@/public/assets/japan/donki/item2.png'), blur: true, tags: [TAGS.donky, TAGS.snack]},
    {name: '부르봉 루만도', price: '¥279', star: 5, imageSrc: require('@/public/assets/japan/donki/item3.png'), blur: true, tags: [TAGS.donky, TAGS.snack]},
    {name: '파이노미', price: '¥239', star: 5, imageSrc: require('@/public/assets/japan/donki/item4.png'), blur: true, tags: [TAGS.donky, TAGS.snack]},
    {name: '랑그리', price: '¥179', star: 5, imageSrc: require('@/public/assets/japan/donki/item5.png'), blur: true, tags: [TAGS.donky, TAGS.snack]},
    {name: '푸딩 젤리', price: '¥203', star: 5, imageSrc: require('@/public/assets/japan/donki/item6.png'), blur: true, tags: [TAGS.donky, TAGS.jelly]},
    {name: '크리미 치즈', price: '¥259', star: 5, imageSrc: require('@/public/assets/japan/donki/item7.png'), blur: true, tags: [TAGS.donky, TAGS.snack]},
    {name: 'S&B 골든 카레', price: '¥259', star: 5, imageSrc: require('@/public/assets/japan/donki/item8.png'), blur: true, tags: [TAGS.donky, TAGS.cooking]},
    {name: '산토리 위스키', price: '¥1,500', star: 5, imageSrc: require('@/public/assets/japan/donki/item9.png'), blur: true, tags: [TAGS.donky, TAGS.alcohol]},
    {name: '샤넬', imageSrc: require('@/public/assets/japan/fashion/chanel.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '셀린느', imageSrc: require('@/public/assets/japan/fashion/celine.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '비비안 웨스트우드', imageSrc: require('@/public/assets/japan/fashion/vivienne-westwood.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '크롬하츠', imageSrc: require('@/public/assets/japan/fashion/chrome-hearts.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '꼼데가르송', imageSrc: require('@/public/assets/japan/fashion/comme-des-garcons.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '휴먼메이드', imageSrc: require('@/public/assets/japan/fashion/human-made.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '슈프림', imageSrc: require('@/public/assets/japan/fashion/supreme.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '메종키츠네', imageSrc: require('@/public/assets/japan/fashion/maison-kitsune.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '요시다 포터', imageSrc: require('@/public/assets/japan/fashion/yoshida-porter.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '보테가베네타', imageSrc: require('@/public/assets/japan/fashion/bottega-veneta.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '러쉬', imageSrc: require('@/public/assets/japan/fashion/lush.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '프라이탁', imageSrc: require('@/public/assets/japan/fashion/freitag.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '겐조', imageSrc: require('@/public/assets/japan/fashion/kenzo.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '단톤', imageSrc: require('@/public/assets/japan/fashion/danton.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '코스', imageSrc: require('@/public/assets/japan/fashion/cos.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '베이프', imageSrc: require('@/public/assets/japan/fashion/bape.svg'), blur: false, tags: [TAGS.fashion]},
    {name: '메종 미하라 야스히로', imageSrc: require('@/public/assets/japan/fashion/maison-mihara-yasuhiro.svg'), blur: false, tags: [TAGS.fashion]}
];

function getSearchedData(searchText: string) {
    if (searchText === '') {
        return DATA;
    }

    return DATA.filter(({name, tags}) => name.includes(searchText) || tags.some(tag => tag.key.includes(searchText) || tag.name.includes(searchText)))
}

export default function Page() {
    const [searchText, setSearchText] = useState('');
    const [curPage, setCurPage] = useState(1);

    const data = getSearchedData(searchText)
    const maxPage = Math.ceil(data.length / maxItemSizeByPage)

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
                            <Image className="img-fluid rounded-3 my-5" src={japanImage} alt="일본" placeholder="blur" />
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

            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <div
                                className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                {data.slice(maxItemSizeByPage * (curPage - 1), maxItemSizeByPage * (curPage - 1) + maxItemSizeByPage).map((item) => (
                                    <ItemCard key={`item-card-${item.name}`} name={item.name} price={item?.price}
                                              star={item?.star}
                                              imageSrc={item.imageSrc} blur={item.blur} />
                                ))}
                            </div>
                            <nav aria-label="Pagination">
                                <hr className="my-0" />
                                <ul className="pagination justify-content-center my-4">
                                    <li className={`page-item ${curPage === 1 && 'disabled'}`}><a className="page-link" href="#!" aria-disabled={curPage === 1} onClick={e => setCurPage(1)}>Newer</a></li>
                                    {range(1, maxPage + 1).map((pageNum) => (
                                        <li className={`page-item ${curPage === pageNum && 'active'}`} aria-current="page"><a className="page-link" href="#!" onClick={e => setCurPage(pageNum)}>{pageNum}</a></li>
                                    ))}
                                    <li className={`page-item ${curPage === maxPage && 'disabled'}`}><a className="page-link" aria-disabled={curPage === 1} href="#!" onClick={e => setCurPage(maxPage)}>Older</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-header">검색</div>
                                <div className="card-body">
                                    <div className="input-group">
                                        <input className="form-control" type="text" value={searchText} placeholder="무엇을 찾을까요?"
                                               aria-label="무엇을 찾을까요?" aria-describedby="button-search" onChange={e => setSearchText(e.target.value)} />
                                        <button className="btn btn-primary" id="button-search" type="button" onClick={e => setSearchText('')}>초기화</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">태그</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled mb-0">
                                                {tags.filter((_, i) => i % 2 === 0).map(tag => (<li><a key={`tag-${tag.key}`} href='#!' onClick={e => setSearchText(tag.name)}>{tag.name}</a></li>))}
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled mb-0">
                                                {tags.filter((_, i) => i % 2 === 1).map(tag => (<li><a key={`tag-${tag.key}`} href='#!' onClick={e => setSearchText(tag.name)}>{tag.name}</a></li>))}
                                            </ul>
                                        </div>
                                    </div>
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
