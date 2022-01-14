import React from 'react';
import { Container ,Button1} from '../../globalStyles';
import {Link} from "react-router-dom"

import {
    InfoSec,
    InfoColumn,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    ImgWrapper,
    Img,
} from "./infoSection.element";

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDesc,
    lightText,
    topLine,
    headLine,
    description,
    buttonLabel,
    primary,
    img,
    start,
    alt
})=>{
    return(
        <>
        <InfoSec lightBg = {lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <SubTitle lightTextDesc={lightTextDesc}>
                                {description}
                            </SubTitle>
                            <Link to="/sign-up">
                                <Button1 big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button1>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    )
}

export default InfoSection;