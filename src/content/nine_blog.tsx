
import '../css/nine.css'
import { useState } from 'react';

function Nine_blog() {

  const [visibleCount, setVisibleCount] = useState(6);
  const blog_data = [
    { img: "/nine/blog/blog_1.png", title: "음주운전 특별사면, 과연 가능할까?", sub: "실수였다면, 다시 운전할 수 있을까?", url: "https://blog.naver.com/inga246/223910013832" },
    { img: "/nine/blog/blog_2.png", title: "음주운전 행정심판 궁금합니다", sub: "면허 구제 서비스라는 것은? 행정심판? ", url: "https://blog.naver.com/inga246/223894211426" },
    { img: "/nine/blog/blog_3.png", title: "숙취 운전도 음주운전입니다", sub: "음주운전의 처벌과 구제 가능성", url: "https://blog.naver.com/inga246/223897022371" },
    { img: "/nine/blog/blog_4.png", title: "생계 위협하는 음주운전초범 면허취소", sub: "행정심판 비용과 감경 가능성", url: "https://blog.naver.com/inga246/223897056888" },
    { img: "/nine/blog/blog_5.png", title: "여름 휴가철, 전동킥보드음주운전이 부르는 면허취소 위험", sub: "전동킥보드 음주운전, 가볍게 생각하면 안됩니다", url: "https://blog.naver.com/inga246/223898102204" },
    { img: "/nine/blog/blog_6.png", title: "음주운전경찰조사 불리해도 기회는 있다! ", sub: "음주운전 행정신판? 그리고 비용은 얼마?", url: "https://blog.naver.com/inga246/223898140980" },

    { img: "/nine/blog/blog_7.png", title: "음주운전 탄원서, 잘못 쓰면 후회 막심!", sub: "선처 가능성 높이는 작성법 (+양식 포함)", url: "https://blog.naver.com/inga246/223900964563" },
    { img: "/nine/blog/blog_8.png", title: "음주측정거부죄, 벌금? 징역?", sub: "당신이 몰랐던 처벌의 실체", url: "https://blog.naver.com/inga246/223903492885" },
    { img: "/nine/blog/blog_9.png", title: "음주운전, 행정심판으로 구제받을 수 있을까? ", sub: "행정심판 구제비용은 얼마나 들까?", url: "https://blog.naver.com/inga246/223908889157" },
    { img: "/nine/blog/blog_10.png", title: "면허취소, 0.1% 이상도 구제 가능?", sub: "이 조건'이라면 희망 있다", url: "https://blog.naver.com/inga246/223912430768" },
    { img: "/nine/blog/blog_11.png", title: "음주운전 면허구제, 인용률 5% 시대!", sub: "면허를 지킬 '최후 대책'은?", url: "https://blog.naver.com/inga246/223912406957" },
    { img: "/nine/blog/blog_12.png", title: "생계형 운전자 필독! 음주3진아웃,", sub: "면허 구제 가능성 높이는 법", url: "https://blog.naver.com/inga246/223911308487" },

  ];

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div style={{ color: "black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div className="nine_data_content">
        {blog_data.slice(0, visibleCount).map((item, index) => (
          <div key={index} onClick={()=> window.open(item.url)}
            style={{ cursor:"pointer"}}
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>
        ))}
      </div>
      {visibleCount < blog_data.length && (
        <div className='tube_plus' onClick={handleShowMore}>
          더보기
          <img src="/ten/back.png" alt="로고" className='tube_plus_arrow' />
        </div>
      )}
    </div>
  )
}

export default Nine_blog
