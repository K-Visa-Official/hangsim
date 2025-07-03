
import '../css/six.css'

export interface CarouselItem {
    image: string;
    text: string;
    alt?: string;
}




function Six() {

    const six_data = [
        { img: "/six/six_1.png", title: "귀가 중 가까운 거리라 판단하고 운전하다 적발되었으나, 생계형 운전임을 소명한 사례", sub: "홍**/31세 / 혈중알코올농도 0.042%" },
        { img: "/six/six_2.png", title: "숙취로 인한 음주운전이었고 운전이 직업상 필수임을 입증한 사례", sub: "김** / 42세 / 혈중알코올농도 0.058%" },
        { img: "/six/six_3.png", title: "부양가족이 있고 생계를 위해 운전이 필요한 점을 소명한 사례", sub: "이** / 36세 / 혈중알코올농도 0.083%" },
        { img: "/six/six_4.png", title: "잠에서 깬 후 취기가 사라졌다고 판단하여 운전했으나, 가족 생계 사유로 진행한 사례", sub: "박** / 40세 / 혈중알코올농도 0.053%" },
        { img: "/six/six_5.png", title: "배달업 종사자로, 운전이 생계 유지에 필수적이라는 점을 입증하여 진행한 사례", sub: "정** / 33세 / 혈중알코올농도 0.066%" },
        { img: "/six/six_6.png", title: "거리 짧고 취기가 없다고 판단하여 귀가하다 적발, 영업직 특성상 운전이 필요성으로 진행", sub: "오** / 35세 / 혈중알코올농도 0.043%" },
    ];


    const six_data_second = [
        { img: "/six/six_7.png", title: "시동을 켜진 채로 휴식 중 신고로 인한 적발, 사업상 운전 필수 사유로 진행한 사례", sub: "강** / 39세 / 혈중알코올농도 0.089%" },
        { img: "/six/six_8.png", title: "통원치료가 필요한 가족이 있고, 운전이 생계에 필수임을 입증한 사례", sub: "조** / 47세 / 혈중알코올농도 0.091%" },
        { img: "/six/six_9.png", title: "주차 중 시비로 급히 차량을 이동하다 적발되었고, 부양가족과 출퇴근으로 진행한 사례", sub: "유** / 50세 / 혈중알코올농도 0.069%" },
        { img: "/six/six_10.png", title: "대리기사가 오지 않아 짧은 거리 운전 중 적발되었으며, 부양가족 및 생계형 운전으로 진행한 사례", sub: "최** / 37세 / 혈중알코올농도 0.097%" },
        { img: "/six/six_11.png", title: "집안 사정으로 급히 운전했으며, 출퇴근 운전의 필요성과 부양가족 존재로 진행한 사례", sub: "김** / 44세 / 혈중알코올농도 0.059%" },
        { img: "/six/six_12.png", title: "숙취 상태에서 외근 업무로 운전 중 단속되었으나, 통원치료가 필요한 가족과 가정형편을 소명한 사례", sub: "이** / 34세 / 혈중알코올농도 0.062%" },
    ];

    const baseSpeed = 16; // 10초 기준
    const speed = (six_data.length / 6) * baseSpeed; // 5개 기준으로 비율 계산


    return (
        <div className='six_data_box'>
            <div className='six_title_box'>
                <p>
                    <span style={{ color: "#3040a0" }}>다양한 의뢰인 사건을</span><br />
                    해결하고 있습니다
                </p>
                <h5>2025. 06 기준 200건 이상 상담완료</h5>
            </div>
            <div className="marqueeWrapper">
                <div className="marqueeContent"
                    style={{ animationDuration: `${speed}s` }}>
                    {[...six_data, ...six_data, ...six_data].map((item, index) => (
                        <div key={index} className="marqueeItem">
                            <img src={item.img} alt="로고" />
                            <div className='image_text_box'>
                                <p>{item.title}</p>
                                <h5>{item.sub}</h5>
                            </div>

                            {/* <p className={styles.text}>{item.text}</p> */}
                        </div>
                    ))}
                </div>
            </div>

             <div className="marqueeWrapper" style={{ marginTop:"0px"}}>
                <div className="marqueeContent_reverse"
                    style={{ animationDuration: `${speed}s` }}>
                    {[...six_data_second, ...six_data_second, ...six_data_second].map((item, index) => (
                        <div key={index} className="marqueeItem">
                            <img src={item.img} alt="로고" />
                            <div className='image_text_box'>
                                <p>{item.title}</p>
                                <h5>{item.sub}</h5>
                            </div>

                            {/* <p className={styles.text}>{item.text}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Six
