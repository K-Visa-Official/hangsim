
import '../css/nine.css'
import { useState } from 'react';


function Nine_tube() {

  const [visibleCount, setVisibleCount] = useState(6);
  
  const tube_data = [
    { img: "https://i.ytimg.com/vi/XZdTCi2uGKc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvwdE2l_6PT_3nIQQGyZf5F2SGWw", title: "왜 어제 마신 술로 인해 음주 단속에 걸린 거야?!", sub: "알코올 분해속도와 음주운전 적발의 함정!", url: "https://youtu.be/XZdTCi2uGKc" },
    { img: "https://i.ytimg.com/vi/WDgeXxFC8FA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2iy8GhYoEi0AypjjDct8BJ2ds-g", title: "이번이 2회차 적발이라고?!  10년 넘게 전에 걸렸는데??", sub: "음주운전 적발, 10년이 넘어도 가중처벌?!", url: "https://youtu.be/WDgeXxFC8FA" },
    { img: "https://i.ytimg.com/vi/BR0xFPU4T8o/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCg1BZUQHwspX0trZKOtVxAum5xIw", title: "최초적발? 경찰조사?? 음주운전 조사 순서는..?", sub: "최초 경찰 적발에서부터 행정심판까지의 과정 안내!", url: "https://youtu.be/BR0xFPU4T8o" },
    { img: "https://i.ytimg.com/vi/AFVCIqLxAw4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBheabRLC5k--Ue-M0dcIyKV_xF1w", title: "공기업 직원이신데 음주운전을 적발 당하셨다고요?", sub: "일반인과 다른 공기업 직원의 가중 처벌", url: "https://youtu.be/AFVCIqLxAw4" },
    { img: "https://i.ytimg.com/vi/xvThBIw9jUI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnoB5hC6aFCukaLaDTuF-ri-_AeQ", title: "음주운전 약식기소, 제일 낮은 감경이 아니다", sub: "약식기소 상태에서, 벌금 등의 규제 줄여보기", url: "https://youtu.be/xvThBIw9jUI" },
    { img: "https://i.ytimg.com/vi/O-hAfBYXKVE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAn2Z-31yw0V-gMwVdAINYrvz2lFg", title: "오토바이로 음주운전을 하셨다고?? 큰일인데?!", sub: "오토바이 음주운전의 처벌과 범칙금, 어떻게 다를까?!", url: "https://youtu.be/O-hAfBYXKVE" },

    { img: "https://i.ytimg.com/vi/wRyFiEglZFk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCXv74XREB_iGYwrab5jOIRNNyn-Q", title: "음주운전 사고에서는 합의가 의미 없다고? ", sub: "음주운전사고합의의 기준과 실익, 그리고 현실적 접근법", url: "https://youtu.be/wRyFiEglZFk" },
    { img: "https://i.ytimg.com/vi/hETmimX_7eM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDD3xPsRkMNHdxzYscBWG5RBgrSdQ", title: "음주운전 이의신청은 뭐고, 행정심판은 뭐야", sub: "음주운전 면허취소, 기간만 보고 절망? 구제 절차만이 희망", url: "https://youtu.be/hETmimX_7eM" },
    { img: "https://i.ytimg.com/vi/NTsWj6DAE7Q/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD1EL21EXk8DJLnntb0NxyHRJW28Q", title: "음주측정거부죄, 벌금? 징역?", sub: "당신이 몰랐던 음주운전 처벌의 실체 !!", url: "https://youtu.be/NTsWj6DAE7Q" },
    { img: "https://i.ytimg.com/vi/gN1dxO0Ubrk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLjOGuJMW8K67Am7LFAANO6x6GxA", title: "면허정지? 여기에서 기간을 더 줄일 수 있다고?", sub: "음주운전 면허정지, 이제 교육받고 기간 줄여보자!", url: "https://youtu.be/gN1dxO0Ubrk" },
    { img: "https://i.ytimg.com/vi/M3StR6F_XjM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCLjk0bU7ogwYPB6N2TR94MUcdb5w", title: "내 음주운전 벌금이 이 만큼이라고?", sub: "음주운전벌금의 부과 기준과 분석법", url: "https://youtu.be/M3StR6F_XjM" },
    { img: "https://i.ytimg.com/vi/vxy64ubiX4k/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBLlw-4Rwc3XsVzHtinf4773ddAgA", title: "음주운전 특별 사면 제도?! 어떻게?! ", sub: "음주운전에도 특별사면이 있을까?! 그 대상은 누구일까?!", url: "https://youtu.be/vxy64ubiX4k" },

  ];

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div style={{ color: "black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div className="nine_data_content">
        {tube_data.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            onClick={() => window.open(item.url)}
            style={{ cursor: "pointer" }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* 플레이 버튼 */}
              <img
                src="/play.png"
                alt="play"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  pointerEvents: "none", // 클릭 이벤트가 이미지로 막히지 않게
                }}
              />
              {/* 썸네일 이미지 */}
              <img
                src={item.img}
                alt={item.title}
                style={{
                  borderRadius: "20px",
                  display: "block", // 공백 문제 방지
                  width: "100%", // 필요한 경우
                }}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>

        ))}
      </div>
      {visibleCount < tube_data.length && (
        <div className='tube_plus' onClick={handleShowMore}>
          더보기
          <img src="/ten/back.png" alt="로고" className='tube_plus_arrow' />
        </div>
      )}
    </div>
  )
}

export default Nine_tube
