
import '../css/five.css'
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css"

function Five() {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const five_data = [
        {
            img: "/five/five_logo_first.png", text: "행정심판연구소", sub: ["사실관계 분석 및 절차안내", "행정심판 구비서류 안내", "전문가 서류작성 서비스",
                "빅데이터를 활용한 맞춤형 분석서비스", "1대1 담당직원을 배정하여 끝까지 케어", "무료 진정서 서류작성 서비스", "온라인 행정심판을 활용한\n접수 및 제출대행 서비스", "무료 구제확률 상담을 통해\n현 상황에 적합한 해결방법 제시"
            ]
        },
        { img: "/five/five_logo_second.png", text: "타업체", sub: ["사실관계 분석 및 절차안내", "행정심판 구비서류 안내", "전문가 서류작성 서비스"] },
        { img: "/five/five_logo_third.png", text: "직접진행", sub: ["음주운전 구제 데이터 부족", "행정사 라이센스 미보유"] },
    ]

    const card_data = [{ card: "/five/card_first.png" }, { card: "/five/card_second.png" }, { card: "/five/card_third.png" }, { card: "/five/card_four.png" }]

    return (
        <>
            <div className='five_data_box'>
                <p>
                    국내 초저가로 제공합니다.<br />
                    <span style={{ color: "#ffd700" }}>직접 비교해보세요</span>
                </p>
                {width < 768 ?
                    <Swiper spaceBetween={20} // 슬라이드 사이 간격
                        slidesPerView={1.2}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        pagination={{ clickable: true }}
                        className="five_data_content"
                    >
                        {five_data.map((item, index) => {
                            return (
                                <>
                                    {index === 0 ?
                                        <SwiperSlide key={index} className='five_data_content_box' style={{ height: "485px", width: "87%" }}>
                                            <div className='five_data_content_title_box'>
                                                <div className='five_data_content_img_box' style={{ background: "transparent" }}>
                                                    <img src={item.img} alt="로고" className='five_data_content_first_img' />
                                                </div>
                                                <span>{item.text}</span>
                                            </div>
                                            <h1 style={{ color: "#000" }}>서비스 제공 내역</h1>
                                            <ul>
                                                {item.sub.map((subItem, subIndex) => {
                                                    return (
                                                        <li key={subIndex} style={{ color: "black", listStyle: "none" }}>

                                                            <img src="/five/five_list_check.png" alt="로고" />
                                                            {subItem}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </SwiperSlide>
                                        :
                                        <SwiperSlide key={index} className='five_data_content_box' style={{ background: "transparent", border: "solid 1px #5d5d5d", height: "485px", width: "87%" }}>
                                            <div className='five_data_content_title_box'>
                                                <div className='five_data_content_img_box'>
                                                    <img src={item.img} alt="로고" />
                                                </div>
                                                <span style={{ color: "white" }}>{item.text}</span>
                                            </div>
                                            <h1>서비스 제공 내역</h1>
                                            <ul>
                                                {item.sub.map((subItem, subIndex) => {
                                                    return (
                                                        <li key={subIndex} style={{ color: "white", listStyle: "none" }}>

                                                            <img src="/five/five_list_check.png" alt="로고" />
                                                            {subItem}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </SwiperSlide>
                                    }
                                </>
                            )
                        })}
                        <div className="mobile_bar_container">
                            <div className={`moving_bar index-${activeIndex}`} />
                        </div>
                    </Swiper>
                    :
                    <div className='five_data_content'>
                        {five_data.map((item, index) => {
                            return (
                                <>
                                    {index === 0 ?
                                        <div className='five_data_content_box' key={index}>
                                            <div className='five_data_content_title_box'>
                                                <div className='five_data_content_img_box' style={{ background: "transparent" }}>
                                                    <img src={item.img} alt="로고" className='five_data_content_first_img' />
                                                </div>
                                                <span>{item.text}</span>
                                            </div>
                                            <h1 style={{ color: "#000" }}>서비스 제공 내역</h1>
                                            <ul>
                                                {item.sub.map((subItem, subIndex) => {
                                                    return (
                                                        <li key={subIndex} style={{ color: "black", listStyle: "none" }}>

                                                            <img src="/five/five_list_check.png" alt="로고" />
                                                            {subItem}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        :
                                        <div className='five_data_content_box' style={{ background: "transparent", border: "solid 1px #5d5d5d" }}>
                                            <div className='five_data_content_title_box'>
                                                <div className='five_data_content_img_box'>
                                                    <img src={item.img} alt="로고" />
                                                </div>
                                                <span style={{ color: "white" }}>{item.text}</span>
                                            </div>
                                            <h1>서비스 제공 내역</h1>
                                            <ul>
                                                {item.sub.map((subItem, subIndex) => {
                                                    return (
                                                        <li key={subIndex} style={{ color: "white", listStyle: "none" }}>

                                                            <img src="/five/five_list_check.png" alt="로고" />
                                                            {subItem}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    }
                                </>
                            )
                        })}
                    </div>
                }
                {/* <div className='five_data_content'>
                    {five_data.map((item, index) => {
                        return (
                            <>
                                {index === 0 ?
                                    <div className='five_data_content_box' key={index}>
                                        <div className='five_data_content_title_box'>
                                            <div className='five_data_content_img_box' style={{ background: "transparent" }}>
                                                <img src={item.img} alt="로고" className='five_data_content_first_img' />
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                        <h1 style={{ color: "#000" }}>서비스 제공 내역</h1>
                                        <ul>
                                            {item.sub.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex} style={{ color: "black", listStyle: "none" }}>

                                                        <img src="/five/five_list_check.png" alt="로고" />
                                                        {subItem}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    :
                                    <div className='five_data_content_box' style={{ background: "transparent", border: "solid 1px #5d5d5d" }}>
                                        <div className='five_data_content_title_box'>
                                            <div className='five_data_content_img_box'>
                                                <img src={item.img} alt="로고" />
                                            </div>
                                            <span style={{ color: "white" }}>{item.text}</span>
                                        </div>
                                        <h1>서비스 제공 내역</h1>
                                        <ul>
                                            {item.sub.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex} style={{ color: "white", listStyle: "none" }}>

                                                        <img src="/five/five_list_check.png" alt="로고" />
                                                        {subItem}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                }
                            </>
                        )
                    })}
                </div> */}
                {width < 768 ?
                    <div className='five_data_content_second_box'>
                        <div className='five_data_content_second_first'>
                            <div className='five_data_content_second_first_box'>
                                <p>회사정보를 더 확인하고 싶다면?</p>
                                <img src="/five/five_second_img.png" alt="로고" />
                            </div>
                            <div className='five_data_content_second_second_box'>
                                <p>운영하고 있는 유튜브를 확인하세요</p>
                            </div>
                        </div>

                        <div className='five_data_content_second_first' style={{ background: "transparent", alignItems: "flex-start", }}>
                            <h4>신용카드 무이자 할부 결제 가능</h4>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" , width: "100%" }}>
                                {card_data.map((item, index) => {
                                    return (
                                        <div key={index} className='card_box'>
                                            <img src={item.card} alt="로고" style={{ width: "140px", height: "auto" }} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <div className='five_data_content_second_box'>
                        <div className='five_data_content_second_first'onClick={()=>
                                window.open('https://www.youtube.com/@%ED%96%89%EC%A0%95%EC%8B%AC%ED%8C%90%EC%97%B0%EA%B5%AC%EC%86%8C')
                            }>
                            <div className='five_data_content_second_first_box' >
                                <p>회사정보를 더 확인하고 싶다면?</p>
                                <img src="/five/five_second_img.png" alt="로고" />
                            </div>
                            <div className='five_data_content_second_second_box'>
                                <p>운영하고 있는 유튜브를 확인하세요</p>
                            </div>
                        </div>

                        <div className='five_data_content_second_first' style={{ background: "transparent", alignItems: "flex-start", }}>
                            <h4>신용카드 무이자 할부 결제 가능</h4>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                {card_data.map((item, index) => {
                                    return (
                                        <div key={index} className='card_box'>
                                            <img src={item.card} alt="로고" style={{ width: "100%", height: "auto" }} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                }

            </div>


        </>
    )
}

export default Five
