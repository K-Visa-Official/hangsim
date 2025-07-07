import '../css/ten_first.css'

function Ten_first() {

    const ten_first_data = [
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/certi-change.png", title: "법무부 인가의\n출입국 민원대행기관" },
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/cert-patent.png", title: "관련 서비스 특허\n8건 출원 및 등록" },
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/cert-consultant.png", title: "행정사 자격증 보유" },
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/certi_new_first.jpg", title: "행정사업무 신고 확인증" },
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/certi_new_second.jpg", title: "행정사회원증" },
        { img: "https://www.k-visa.co.kr/resources/img/2024/components/achievements/cert-job-info-provision.png" , title: "대한행정사회 회원등록증"}
    ];

    return (
        <div className='ten_first_data_box'>
            <div className='ten_first_data_content'>
                {ten_first_data.map((item, index) => {
                    return (
                        <div key={index} style={{ display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
                            <img src={item.img} alt="로고" />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Ten_first
