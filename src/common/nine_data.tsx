
import '../css/nine.css'
import { useState } from 'react'
import Nine_blog from '../content/nine_blog';
import Nine_tube from '../content/nine_tube';

function Nine() {

    const [content, setContent] = useState<string>("영상 콘텐츠");

    return (
        <div className='nine_data_box'>
            <p>
                <span style={{ color: "#3040a0" }}>음주운전 구제</span>를 위한<br />
                콘텐츠를 확인하세요
            </p>
            <div className='content_box'>
                <p style={{
                    color: content === "영상 콘텐츠" ? "black" : "#84848f",
                    borderBottom: content === "영상 콘텐츠" ? "5px solid black" : "1px solid #ebecf1",
                }} onClick={() => setContent("영상 콘텐츠")}>영상 콘텐츠</p>
                <p style={{
                    color: content === "블로그 콘텐츠" ? "black" : "#84848f",
                    borderBottom: content === "블로그 콘텐츠" ? "5px solid black" : "1px solid #ebecf1",
                }} onClick={() => setContent("블로그 콘텐츠")}>블로그 콘텐츠</p>
            </div>
            {content === "영상 콘텐츠" ?
            <Nine_tube/>
            :
            <Nine_blog/>
            }

        </div >
    )
}

export default Nine
