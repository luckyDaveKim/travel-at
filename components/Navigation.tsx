'use client'

import Link from "next/link";

export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" href="/">Travel At</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page"
                                                        href="/">Home</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">일본</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" href="/japan/donki">돈키호테</Link></li>
                                    <li><Link className="dropdown-item" href="/japan/fashion">패션</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="btn btn-outline-dark" href="mailto:1k2m3g4@gmail.com">
                                <i className="bi-info-circle-fill me-1"></i>
                                제보하기
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
