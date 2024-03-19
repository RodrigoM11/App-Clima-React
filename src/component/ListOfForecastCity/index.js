import React, { useRef, useState } from 'react';
import { ForecastCityComponent } from '../ForecastCity';
import { List } from './styled'

export const ListOfForecastCityComponent = ({ forecast }) => {

        const wrapperRef = useRef(null);
        const animationRef = useRef(null);
        const [isAtEnd, setIsAtEnd] = useState(false);

        const handleMouseOver = () => {
                const wrapper = wrapperRef.current;
                const scrollAmount = 1;
                const scrollDirection = 1;

                cancelAnimationFrame(animationRef.current);

                const scroll = () => {
                        const newScrollLeft = wrapper.scrollLeft + scrollAmount * scrollDirection;

                        if (newScrollLeft >= wrapper.scrollWidth - wrapper.clientWidth) {
                                setIsAtEnd(true);
                        } else if (newScrollLeft <= 0) {
                                setIsAtEnd(false);
                        }

                        wrapper.scrollLeft = isAtEnd ? wrapper.scrollWidth - wrapper.clientWidth : newScrollLeft;
                };

                const scrollLoop = () => {
                        scroll();
                        animationRef.current = requestAnimationFrame(scrollLoop);
                };

                scrollLoop();
        };

        const handleMouseOut = () => {
                cancelAnimationFrame(animationRef.current);
                setIsAtEnd(false);
                wrapperRef.current.scrollLeft = 0;
        }

        return (
                <List ref={wrapperRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                        {forecast.map((fore) => (
                                <ForecastCityComponent key={fore.dayCar} {...fore} />
                        ))}
                </List>
        )
}