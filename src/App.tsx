import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Fix_content from './common/fix'
import Second_data from './common/second_data'
import Third_data from './common/third_data'
import Four from './common/four_data'
import Five from './common/five_data'
import Six from './common/six_data'
import Seven from './common/seven_data'
import Eight from './common/eight_data'
import Nine from './common/nine_data'
import Ten from './common/ten_data'
import Ten_first from './common/ten_first_data'
import Footer from './common/Footer'

function App() {
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

  const first_Data = [
    { img: "/first/first_data_first.png", text: "음주운전 구제서류 작성", sub: "음주운전 구제에 A to Z까지\n전문가의 맞춤형 서류작성 진행" },
    { img: "/first/first_data_second.png", text: "진정서/반성문/탄원서 제공", sub: "구제확률을 높일 수 있는\n맞춤형 핵심서류를 제공" },
    { img: "/first/first_data_third.png", text: "작성 후 2일이내 즉시발송", sub: "경찰조사부터 행정심판까지\n제출가능한 시기에 맞춰서 등기발송" },
    { img: "/first/first_data_four.png", text: "음주운전 행정사 컨설팅", sub: "2015년도 행정사 자격들 취득한\n10년차 행정사가 직접 처리진행" },
  ]

  return (
    <div style={{ paddingBottom: "100px", overflowX: "hidden" }}>
      <div className='first_content'>

        <div className='top_line'>
          음주운전 구제확률을 확인하고, 79만원에 빠르게 해결하세요
        </div>

        <div className='first_content_header'>
          <img src="/logo.png" alt="로고" className='first_content_header_img' />

          <div className='first_content_certify'>
            <img src="/first/certify.png" alt="로고" />
          </div>
        </div>

        <div className='first_content_banner'>
          <div className='first_content_banner_text'>
            <p>금액이 저렴하다고,<br />
              허가확률이 절대 낮지 않습니다.</p>
            <h1>
              음주운전 구제<br />
              <span style={{ color: '#ffd700' }}>79만원</span>으로<br />
              시작하세요
            </h1>
            <div className='first_content_kakao_box' style={{ display: width < 768 ? "none" : "flex", }}>
              <div className='first_content_tel_box'
              onClick={()=> window.open('tel:010-2617-8953')}>
                <img src="/first/contact_first.png" alt="로고" style={{
                  display: width < 768 ? "none" : "block",
                  width: "16px", height: "auto", position: "absolute", left: "20px"
                }} />
                <p>010-2617-8953<br />
                  <span style={{ fontSize: "12px", fontWeight: "lighter" }}>(24시간 상담)</span>
                </p>
              </div>

              <div className='first_content_tel_box' style={{ background: "#ffd700" }}
              onClick={()=> window.open('https://docs.google.com/forms/d/e/1FAIpQLSePK4MJARQtyNHvn55Hfoy7UeZaCsU43cKvZ4b2Y-8_0j-DsA/viewform')}>
                <img src="/first/contact_second.png" alt="로고" style={{
                  display: width < 768 ? "none" : "block",
                  width: "24px", height: "auto", position: "absolute", left: "20px"
                }} />
                <p style={{ color: "black" }}>무료상담 예약</p>
              </div>

            </div>

          </div>
          <img src="/first/first_content.png" alt="로고" />
        </div>

        {width < 768 ?
          <h2>
            국내 초저가 !!! <br /><span style={{ color: '#ffd700' }}>79만원</span>에
            이 모든 <br />서비스를 제공합니다.
          </h2>
          :
          <h2>
            국내 초저가 !!! <span style={{ color: '#ffd700' }}>79만원</span>에<br />
            이 모든 서비스를 제공합니다.
          </h2>
        }


        <div className='first_content_banner' style={{ margin: width < 768 ? "0px 0px 0px 0px" : "80px 0 0 0" }}>
          {first_Data.map((item, index) => {
            return (
              <div key={index} className='first_content_data_list'>
                <img src={item.img} alt="로고" style={{ width: "100%", height: "auto" }} />
                <h3>{item.text}</h3>
                <h4>{item.sub}</h4>
              </div>
            )
          })}
        </div>

      </div>

      <Second_data />

      <Third_data />

      <Four />

      <Five />

      <Six />

      <Seven />

      <Eight />

      <Nine />

      <Ten />

      <Ten_first />

      <Footer />

      <img src="/float_btn.png" alt="로고" style={{
        width: "70px", height: "auto", position: "fixed", right: "20px", bottom: "120px" , cursor:"pointer" , zIndex:99
      }} onClick={()=> window.open('http://pf.kakao.com/_AjxiRG/chat')}/>

      {/* fixed */}
      <Fix_content />
    </div> 
  )
}

export default App
