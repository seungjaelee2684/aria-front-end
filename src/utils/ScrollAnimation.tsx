import React, { useEffect, useRef, useState } from 'react'

export const ScrollAnimation = () => {

    const scrollDivRef = useRef<HTMLDivElement>(null);
    const [isInObject, setIsInObject] = useState<boolean>(false);

    useEffect(() => {
        if (!scrollDivRef.current) { return; }; //요소가 아직 준비되지 않은 경우

        const callbackFunction = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에 나타났을 경우
                    setIsInObject(true);
                } else {
                    // 요소가 뷰포트를 벗어난 경우
                    setIsInObject(false);
                }
            });
        };

        const options = { root: null, rootMargin: "0px", threshold: 0 };
        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(scrollDivRef.current) // 요소 관찰 시작

        return () => {
            observer.disconnect(); //컴포넌트 언마운트 시 관찰 중단
        };
    }, []);

  return { scrollDivRef, isInObject };
};