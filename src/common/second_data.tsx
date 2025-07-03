
import '../css/second.css'
import { useState, useEffect } from 'react';

function Second_data() {

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
        <div className='second_data_box'>
            {width < 768 ?
                <p>음주운전 구제 !!!<br /> 요건 중
                    하나라도<br /> 해당되면 가능합니다.</p>
                :
                <p>음주운전 구제 !!! 요건 중 <br />
                    하나라도 부합되면 가능합니다.</p>
            }
            {width < 768 ?
                <div className='second_data_list' style={{ marginTop:width < 768 ? "30px" : "60px" }}>
                    <img src="/second/second_first_mo.png" alt="second_data_first" style={{ width: "95%", height: "auto" }} />
                    <img src="/second/second_second_mo.png" alt="second_data_second" style={{ width: "95%", height: "auto", marginTop:"15px" }} />
                </div>
                :
                <div className='second_data_list'>
                    <img src="/second/second_first.png" alt="second_data_first" style={{ width: "38.3%", height: "auto" }} />
                    <img src="/second/second_second.png" alt="second_data_second" style={{ width: "60%", height: "auto" }} />
                </div>
            }
            {width < 768 ?
                <div className='second_data_list' style={{ marginTop: "15px" }}>
                    <img src="/second/second_third_mo.png" alt="second_third" style={{ width: "95%", height: "auto" }} />
                    <img src="/second/second_four_mo.png" alt="second_four" style={{ width: "95%", height: "auto" , marginTop:"15px" }} />
                </div>
                :
                <div className='second_data_list' style={{ marginTop: "20px" }}>
                    <img src="/second/second_third.png" alt="second_third" style={{ width: "51%", height: "auto" }} />
                    <img src="/second/second_four.png" alt="second_four" style={{ width: "47.5%", height: "auto" }} />
                </div>
            }

        </div>
    )
}

export default Second_data
