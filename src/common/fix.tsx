
import '../App.css'
import { useState, useEffect } from 'react'


function Fix_content() {
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
    
    return (
        <>
            <div className='fix_content'>
                <div className='first_content_kakao_box' style={{ margin:0}}>
                    <div className='first_content_tel_box' style={{ marginRight:"10px"}}
                    onClick={()=> window.open('tel:010-2617-8953')}>
                        <img src="/first/contact_first.png" alt="로고" style={{ 
                            display:width < 768 ? "none" : "block" , width: "16px", height: "auto", position: "absolute", left: "20px" }} />
                        <p>010-2617-8953<br/>
                            <span style={{ fontSize:"12px" ,  fontWeight:"lighter"}}>(24시간 상담)</span>
                            </p>
                    </div>

                    <div className='first_content_tel_box' style={{ background: "#ffd900" }}onClick={()=> window.open('https://docs.google.com/forms/d/e/1FAIpQLSePK4MJARQtyNHvn55Hfoy7UeZaCsU43cKvZ4b2Y-8_0j-DsA/viewform')}>
                        <img src="/first/contact_second.png" alt="로고" style={{ 
                            display:width < 768 ? "none" : "block" ,width: "24px", height: "auto", position: "absolute", left: "20px" }} />
                        <p style={{ color: "black" }} >무료상담 예약</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Fix_content
