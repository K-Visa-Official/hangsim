
import '../css/four.css'

function Four() {

    const four_data = [
        { img: "/four/four_first.png", text: "상담사가 상황분석 진행", sub: "전화 또는 카톡으로 문의주시면\n전문 상담사가 친절하게 답변해드립니다." },
        { img: "/four/four_second.png", text: "구제확률 파악 후 계약체결", sub: "접근해야하는 전략과 방법이 모두 다릅니다.\n맞춤형 전략을 함께 시작하세요" },
        { img: "/four/four_third.png", text: "시작부터 끝까지 케어", sub: "누구나 처음은 존재합니다. \n의뢰인의 마음을 이해하고, 케어하고 있습니다." },

    ]


    return (
        <>
            <div className='four_data_box'>
                <p>
                    상담부터 착수까지<br />
                    <span style={{ color: "#3040a0" }}>1일이면 충분합니다</span>
                </p>

                <div className='four_data_content'>
                {four_data.map((item, index) => {
                    return (
                        <div className='four_data_content_box' key={index}>
                            <div className='four_data_content_img_box'>
                                <img src={item.img} alt="로고" />
                            </div>
                             <div className='four_data_content_index_box'>
                                <div className='four_data_content_index'>
                                    {index + 1}
                                </div>
                            </div>
                            <p>{item.text}</p>
                            <h4>{item.sub}</h4>
                        </div>
                    )
                })}

            </div>
            </div>

            
        </>
    )
}

export default Four
