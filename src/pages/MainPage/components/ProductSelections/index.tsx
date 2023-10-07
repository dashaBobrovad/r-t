import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import cx from './index.module.scss';
import { Button } from "../../../../components/ui";
import SwiperConstructor, { type Swiper as SwiperRef } from 'swiper'
import { ReactComponent as ArrowIcon } from '../../../../../static/images/icons/arrows/default.svg';
import cls from 'classnames';
import ProductItem from "../../../../components/ProductItem";
import { uid } from "react-uid";
import '../../../../styles/swipe.scss';
import { useWindowWidth } from "../../../../hooks";

// TODO: 
// подправить стили (когда ресайзим, все еще пересчитывается ширина слайдов - этого делать не надо )


export default function ProductSelections() {
    const windowWidth = useWindowWidth();

    const productsPlug = Array(27).fill(null);

    const swiperRef = useRef<SwiperRef>();

    const swiperSettings = {
            
        breakpoints: {
            // when window width is >= 759px (min-width)
            759: {
                slidesPerView: 6,
                spaceBetween: 24,
        }},
    };

    
   const [swiperInstance, setSwiperInstance] = useState<any>();
    const enableSwiper =  () => {
   
        
        const mySwiper = new SwiperConstructor(swiperRef.current as any, swiperSettings);
        mySwiper.init();
        setSwiperInstance(mySwiper);
    };
    

    useEffect(() => {
        enableSwiper();
    }, [])

    useEffect(() => {
        if (!windowWidth) return;
        if (windowWidth <= 758) {
            swiperInstance.destroy();
        } else {
            enableSwiper();
        }
    }, [windowWidth])

    const onPrevClick = useCallback(
        () => {
            swiperInstance?.slidePrev()
        },
        [swiperInstance],
    )

    const onNextClick = useCallback(
        () => {
            swiperInstance?.slideNext()
        },
        [swiperInstance],
    )
    return (
        <div className={cls(cx.wrapper, 'swipe')}>
            <SwiperComponent
                className="swipe"
                onBeforeInit={({ el }: any) => {

                    swiperRef.current = el;
                }}


            >

                {
                    productsPlug.map((_, index) => <SwiperSlide key={uid(index)} className={cx.slide}><ProductItem size="inSwiper" /></SwiperSlide>)
                }


            </SwiperComponent>

            <div className={cx.nav}>
                <Button onClick={onPrevClick} className={cx.prevBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
                <Button onClick={onNextClick} className={cx.nextBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
            </div>

        </div>
    )
}
