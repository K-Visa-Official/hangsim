
import '../css/third.css'
import { useState, useEffect } from 'react';

function Third() {
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

    const third_data = [
        { img: "/third/third_first.png", text: "유사 해결사례 기반\n데이터 중심 대응전략 제공", sub: "온라인 재결 및 행정심판 사례를 통하여\n최적의 서류작성을 제공합니다." },
        { img: "/third/third_second.png", text: "불필요한 서류 대신\n꼭 필요한 서류만", sub: "음주운전 구제서류 / 진정서 / 탄원서\n범칙금 감경서류 등 필요한 것만 제공" },
        { img: "/third/third_four.png", text: "표준화된 비용구조 + \n명확한 진행 안내", sub: "국내 최초 음주운전 구제에 특화된\n균일한 서비스가 합리적인 가격을 제시" },
    ]


    return (
        <div className='third_data_box'>
            <p>어떻게 음주운전 구제가<br />
                <span style={{ color: "#ffd700" }}>79만원에 가능</span>할까요?</p>
            {third_data.map((item, index) => {
                return (
                    <div key={index} className='thid_content_data_list'
                        style={{
                            flexDirection: width < 768 && index % 2 != 0 ?
                                "column" :
                                width < 768 && index % 2 === 0 ?
                                    "column-reverse" : "row"
                        }}>
                        {index % 2 === 0 ?
                            <>
                                <div style={{ width:width < 768 ? "95%" : "" , textAlign:"left"}}>
                                    <div className='third_data_content_index_box'>
                                        <div className='third_data_content_index'>
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className='third_title'>{item.text}</h3>
                                    <h4 className='third_subtitle'>{item.sub}</h4>
                                </div>
                                <img src={item.img} alt="로고" className='third_img' />
                            </>
                            :
                            <>

                                <img src={item.img} alt="로고" className='third_img' />
                                <div style={{ width:width < 768 ? "95%" : "" , textAlign:"left"}}>
                                    <div className='third_data_content_index_box'>
                                        <div className='third_data_content_index'>
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className='third_title'>{item.text}</h3>
                                    <h4 className='third_subtitle'>{item.sub}</h4>
                                </div>
                            </>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Third
