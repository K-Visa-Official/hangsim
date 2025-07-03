import { useState } from 'react'
import '../css/ten.css'

function Ten() {

    const [ten_data, setten_data] = useState([
        { qu: "행정심판연구소는 어떤 서비스 인가요?", answer: "24시간 상담 · 합리적 비용 · 행정사가 직접 처리하는 음주운전 구제 전문 서비스입니다.", opne: false },
        { qu: "견적 상담하는 방법을 알려주세요.", answer: "전화나 상담폼을 통해서 쉽게 무료로 견적상담을 받을 수 있습니다.", opne: false },
        { qu: "이번이 처음이 아니라서 더욱 더 불안해요", answer: "다양한 고객사례와 데이터를 기반으로 문제를 해결하고 있기 떄문에, 너무 걱정안하셔도 됩니다. 무료 상담부터 시작하세요", opne: false },
        { qu: "전화상담 및 방문상담을 원한다면?", answer: "음주운전 전문 상담사 직통전화 010-2617-8953 로 연락주시면 됩니다.", opne: false },
    ]);


    const toggleOpen = (index: number) => {
        setten_data(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, opne: !item.opne } : item
            )
        );
    };

    return (
        <div className='ten_data_box'>
            <div className='ten_data_content'>
                <div className='ten_data_text'>
                    <p style={{ margin: 0 }}>
                        자주 묻는 질문
                    </p>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", }}>

                    </div>
                </div>
                {ten_data.map((item, index) => {
                    return (
                        <div key={index} style={{ marginTop: 
                            index === 0 ? "20px" : "15px", 
                            width: "100%" }}>
                            <div className='ten_content_box' onClick={() => toggleOpen(index)} style={{ cursor:"pointer"}}>
                                <div style={{ display: "flex", flexDirection: "row" , }}>
                                    <img src="/ten/ten_logo.png" alt="로고" className='ten_logo' />
                                    <p>{item.qu}</p>
                                </div>
                                <img src="/ten/back.png" alt="로고" className='under_arrow'/>
                            </div>
                            {item.opne && (
                                <div className='ten_content_box' style={{ background:"#ddd" , marginTop:"15px"}}>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <p style={{ color:"#495056" }}>{item.answer}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Ten
