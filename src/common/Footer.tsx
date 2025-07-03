
import '../App.css'
import { useEffect , useState } from 'react';

function Footer() {
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
            <div className='footer_box'>
                <div className='footer_inner' style={{ flexDirection:width < 768 ? "column" : "row"}}>

                    <div className='footer_first'>
                        <img src="/logo.png" alt="로고" className='footer_box_logo' />
                        <div style={{ display: "flex", flexDirection: "row", gap: width < 768 ?15 :30 , margin:width < 768 ? "15px 0px 0px 0px"  : "" }}>
                            <p>회사소개</p>
                            <p>공지사항</p>
                            <p>이용약관</p>
                            <p>개인정보처리방침</p>
                        </div>
                         <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ margin:width < 768 ? "10px 0px 0px 0px"  : ""}}>
                                <span style={{ color:"white" , opacity:1}}>케이비자 행정사사무소 </span><br />
                                <span style={{ color:"white" , opacity:0.5}}>케이비자 행정사사무소 대표 행정사: 이상욱 | 행정사업무신고번호: 3180000202517 <br />
                                사업자 등록번호: 438-88-01798 | 주소: 부산광역시 동구 중앙대로 196번길 6-7, 403호 J01</span></h5>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ margin:width < 768 ? "10px 0px 0px 0px"  : ""}}>
                                 <span style={{ color:"white"}}>바른행정 주식회사 / 데이터베이스 및 온라인 정보 제공업</span><br />
                                 <span style={{ color:"white" , opacity:0.5}}>대표자 : 이상욱 | 통신판매신고번호 : 제 2023-서울영등포-0502호<br />
                                사업자 등록번호: 438-88-01798 | 주소: 부산광역시 동구 중앙대로 196번길 6-7, 403호 J01</span></h5>
                        </div>
                        <div style={{ display: "flex", flexDirection: width < 768 ? "column" :"row", gap: width < 768 ?  0 :10 }}>
                            <h5 style={{ margin:width < 768 ? "10px 0px 0px 0px"  : "" ,opacity:0.5}}>(주)바른행정 주식회사</h5>
                            <h5 style={{ margin:width < 768 ? 0 : "" ,opacity:0.5}}>COYPRIGHT(C) 2023by (주)바른행정 주식회사</h5>
                        </div>
                    </div>

                    <div className='footer_first'>
                        <div style={{ display: "flex", flexDirection: "row", gap: 15 , justifyContent:width < 768 ? "flex-start" : "flex-end" ,margin:width < 768 ? "50px 0px 0px 0px"  : "" }}>
                            <img src="/footer/footer_facebook.png" alt="로고" className='footer_content_img' />
                            <img src="/footer/footer_instagram.png" alt="로고" className='footer_content_img' />
                            <img src="/footer/footer_youtube.png" alt="로고" className='footer_content_img' />
                        </div>
                         <h3>대표번호</h3>
                         <h2>1877-8077</h2>
                         <h5 style={{ marginTop:width < 768 ? "10px" : "20px" , textAlign:width < 768 ? "left" :"right" , fontSize:width < 768 ? "12px" : "" }}>(주)바른행정 주식회사</h5>
                    </div>

                    {/* <div className='footer_intro'>
                        <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                            <p>회사소개</p>
                            <p>공지사항</p>
                            <p>이용약관</p>
                            <p>개인정보처리방침</p>
                        </div>
                        <h3>대표번호</h3>
                    </div>

                    <div className='footer_intro'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5>바른행정 주식회사 / 데이터베이스 및 온라인 정보 제공업<br />
                                대표자 : 이상욱 | 통신판매신고번호 : 제 2023-서울영등포-0502호<br />
                                사업자 등록번호: 438-88-01798 | 주소: 부산광역시 동구 중앙대로 196번길 6-7, 403호 J01</h5>
                        </div>
                        <h2>1811-1942</h2>
                    </div>

                    <div className='footer_intro'>
                        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <h5>(주)바른행정 주식회사</h5>
                            <h5>COYPRIGHT(C) 2023by (주)바른행정 주식회사</h5>
                        </div>
                        <h5 style={{ textAlign:"right"}}>평일 오전 09시 ~ 오후 18시<br />
                            (점심시간 : 평일 오후 12시 ~ 오후 1시)</h5>
                    </div> */}

                </div>
            </div>

        </>
    )
}

export default Footer
