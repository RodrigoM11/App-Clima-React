import React, { useState, useRef } from 'react';
import { Div, DIV, DivW, Text, Button, P, DivB, Pwd } from './styled'




export const DetailTodayComponent = ({ humidity, visibility, airPressure, windStatus, windCardinalDirection }) => {

    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [isWindDirectionVisible, setIsWindDirectionVisible] = useState(false);

    const handleButtonClick = () => {
        setIsButtonVisible(false);
        setIsWindDirectionVisible(true);
    };

    const handleWindDirectionClick = () => {
        setIsButtonVisible(true);
        setIsWindDirectionVisible(false);
    };

    const wrapperRefWind = useRef(null);
    const wrapperRefHumidity = useRef(null);
    const wrapperRefVisibility = useRef(null);
    const wrapperRefAirPressure = useRef(null);

    const handleMouseOver = (wrapperRef) => {
        wrapperRef.current.style.transform = 'scale(1.2)';
    };

    const handleMouseOut = (wrapperRef) => {
        wrapperRef.current.style.transform = 'scale(1)';
    };

    return (
        <Div onClick={(event) => event.stopPropagation()} >

            <DivW ref={wrapperRefWind} onMouseOver={() => handleMouseOver(wrapperRefWind)} onMouseOut={() => handleMouseOut(wrapperRefWind)}>
                <P>Wind status</P>
                <DIV>
                    <Text>{windStatus}</Text> <P>mph</P>
                </DIV>

                <DivB>

                    {isButtonVisible && (
                        <Button onClick={handleButtonClick}>
                            <svg width="14" height="14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4675 3.02402C9.33295 1.62189 9.27645 62.0826 10.7927 60.9852C10.7927 60.9852 33.4919 40.8997 53.3536 18.5186C58.82 12.3588 27.8171 17.3708 27.8171 17.3708L16.4675 3.02402Z" fill="#E7E7EB" stroke="#E7E7EB" />
                            </svg>
                        </Button>
                    )}

                </DivB>

                {isWindDirectionVisible && (
                    <div>
                        <Pwd onClick={handleWindDirectionClick}>Direction: {windCardinalDirection}</Pwd>
                    </div>
                )}

            </DivW>

            <DivW ref={wrapperRefHumidity} onMouseOver={() => handleMouseOver(wrapperRefHumidity)} onMouseOut={() => handleMouseOut(wrapperRefHumidity)} >
                <P>Humidity</P>
                <DIV>
                    <Text>{humidity}</Text> <P>%</P>
                </DIV>

                <progress value={humidity} max="100" />

            </DivW>

            <DivW ref={wrapperRefVisibility} onMouseOver={() => handleMouseOver(wrapperRefVisibility)} onMouseOut={() => handleMouseOut(wrapperRefVisibility)} >
                <P>Visibility</P>
                <DIV>
                    <Text>{visibility}</Text> <P>miles</P>
                </DIV>
            </DivW>

            <DivW ref={wrapperRefAirPressure} onMouseOver={() => handleMouseOver(wrapperRefAirPressure)} onMouseOut={() => handleMouseOut(wrapperRefAirPressure)}>
                <P>Air Pressure</P>
                <DIV>
                    <Text>{airPressure}</Text> <P>mb</P>
                </DIV>
            </DivW>


        </Div>
    )

}

