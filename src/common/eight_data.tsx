
import '../css/eight.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css"
import { useState, useEffect } from 'react';

function Eight() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const eight_data = [
        { img: "/eight/news_first.png", text: "행정심판연구소, ‘음주운전 행정심판 실속 패키지’ 업그레이드 출시", create: "2025-06-02", url: "https://www.enetnews.co.kr/news/articleView.html?idxno=38564" },
        { img: "/eight/news_second.png", text: "행정심판연구소, ‘음주운전 무료 구제 상담’ 서비스 개시", create: "2025-06-20", url: "https://www.enetnews.co.kr/news/articleView.html?idxno=39221" },
        { img: "/eight/news_first.png", text: "행정심판연구소, ‘음주운전 행정심판 실속 패키지’ 업그레이드 출시", create: "2025-06-02", url: "https://www.enetnews.co.kr/news/articleView.html?idxno=38564" },
        { img: "/eight/news_second.png", text: "행정심판연구소, ‘음주운전 무료 구제 상담’ 서비스 개시", create: "2025-06-20", url: "https://www.enetnews.co.kr/news/articleView.html?idxno=39221" },

    ]

    return (
        <div className='eight_data_box'>
            <div className='eight_data_content'>
                <div className='eight_data_text'>
                    <p style={{ margin: 0 }}>
                        언론속의 행정심판 연구소
                    </p>
                    <div style={{ display: width < 768 ? "none" : "flex", alignItems: "flex-end", justifyContent: "space-between", }}>
                        <img src="https://www.k-visa.co.kr/resources/img/2024/main-press-img-prev.svg" alt="back"
                            style={{ cursor: "pointer", position: "static", marginRight: "10px", width: "40px" }} className="swiper-button-prev"
                        />
                        <img src="https://www.k-visa.co.kr/resources/img/2024/main-press-img-next.svg" alt="back"
                            style={{ cursor: "pointer", position: "static", width: "40px" }} className="swiper-button-next"
                        />
                    </div>
                </div>

                <Swiper spaceBetween={width < 768 ? 20 : 30} // 슬라이드 사이 간격
                    slidesPerView={width < 768 ? 1.3 : 3.8}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }} // 네비게이션 버튼 활성화
                    loop={true}

                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {eight_data.map((slide, index) => (

                        <SwiperSlide key={index} onClick={() => window.open(slide.url, "_blank")} style={{ width: width < 768 ? "77%" : "" }}>
                            <div style={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
                                <img src={slide.img} alt={slide.img}
                                    style={{ cursor: "pointer", width: "100%" }}
                                />
                                <h3 style={{ fontSize: width < 768 ? "18px" : "21px", fontWeight: "600", textAlign: "left", margin: width < 768 ? "20px 0px 0px 0px" : "15px 0px 0px 0px",
                                    lineHeight:1
                                 }}>{slide.text}</h3>
                                <p style={{ fontSize: width < 768 ? "15px" : "18px", fontWeight: "500", textAlign: "left", opacity: 0.5, margin: width < 768 ? "15px 0px 0px 0px" : "20px 0 0 0" }}>{slide.create}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div >
    )
}

export default Eight
