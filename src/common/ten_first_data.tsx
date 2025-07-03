import '../css/ten_first.css'

function Ten_first() {

    const ten_first_data = [
        { img: "./ten_first/ten_first_1.png", title: "법무부 인가의\n출입국 민원대행기관" },
        { img: "./ten_first/ten_first_2.png", title: "관련 서비스 특허\n8건 출원 및 등록" },
        { img: "./ten_first/ten_first_3.png", title: "행정사 자격증 보유" },
        { img: "./ten_first/ten_first_4.png", title: "벤처기업인증" },
        { img: "./ten_first/ten_first_5.png", title: "행정사업무신고증" },
    ];

    return (
        <div className='ten_first_data_box'>
            <div className='ten_first_data_content'>
                {ten_first_data.map((item, index) => {
                    return (
                        <div key={index} style={{ display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
                            <img src={item.img} alt="로고"  />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Ten_first
