import React from 'react'

const ScrollAnimation = () => {

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // entry의 target으로 DOM에 접근합니다.
            const $target = entry.target;

            // 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤 합니다.
            if (entry.isIntersecting) {
                $target.classList.add("screening");
            } else {
                $target.classList.remove("screening");
            }
        });
    });

    // 옵저버할 대상 DOM을 선택하여 관찰을 시작합니다.
    const $items = document.querySelectorAll("li");
    $items.forEach((item) => {
        io.observe(item);
    });

    // 특정 요소만 옵저버를 해제합니다.
    // io.unobserve(targetElement);

    // 옵저버 전체를 해제합니다.
    // io.disconnect();

    return (
        <div>ScrollAnimation</div>
    )
};

export default ScrollAnimation;