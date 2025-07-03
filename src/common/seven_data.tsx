
import '../css/seven.css'
import { useState, useEffect } from 'react';

function Seven() {
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
        <div className='seven_data_box'>
            <div className='seven_data_content'>
                <div className='seven_data_text'>
                    {width < 768 ?
                    <p>고객 만족도 <span style={{ color: "white" }}>100%</span><br/>
                        추천의사 비율  <span style={{ color: "white" }}>90%</span></p>
                        :
                    <p>고객 만족도 <span style={{ color: "white" }}>100%</span>
                        추천의사 비율  <span style={{ color: "white" }}>90%</span></p>
                    }
                    <h5>출처 : 업무처리 이후 고객소비자 만족도 결과</h5>
                </div>
                <img src={width < 768 ? "/seven/seven_first_mo.png" :"/seven/seven_first.png"} alt="로고" />

            </div>

        </div>
    )
}

export default Seven
