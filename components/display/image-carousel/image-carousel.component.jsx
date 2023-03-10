import React from 'react';

import { ImageCarouselContainer, 
    ImagesContainer, ImageName, Image, 
    Controls, Slider, SliderBar, ImageBoxCenter, ImageBoxLeft, ImageBoxRight} from './image-carousel.styles.jsx'

import ProductOne from 'assets/imgs/product-1.jpg'
import ProductTwo from 'assets/imgs/product-2.jpg'
import ProductThree from 'assets/imgs/product-3.jpg'
import ProductFour from 'assets/imgs/product-4.jpg'
import ProductFive from 'assets/imgs/product-5.jpg'
import ProductSix from 'assets/imgs/product-6.jpg'

import { FaChevronRight, FaChevronLeft} from 'react-icons/fa'

class ImageObj {
    constructor(id, name, src){
        this.id = id;
        this.name = name;
        this.src = src;
    }
}

const images = [
    new ImageObj(0, '0', ProductOne),
    new ImageObj(1, '1', ProductTwo),
    new ImageObj(2, '2', ProductThree),
    new ImageObj(3, '3', ProductFour),
    new ImageObj(4, '4', ProductFive),
    new ImageObj(5, '5', ProductSix),
]

const ImageCarousel = (props) => {

    const [active, setActive] = React.useState({
        img:images[0], 
        index: 0
    })

    const startIndex = active.index === 0 ? 0 : active.index - 1
    const endIndex = (active.index === (images.length - 1)) ? images.length - 1 : active.index + 1
    const currentImages = images.slice(startIndex, endIndex+1)

    const onClickRight = React.useCallback(() => {
        setActive(preActive => {
            const index = (preActive.index === (images.length - 1)) ? 0 : preActive.index + 1
            return { img: images[index], index }
        })
    }, [])
    const onClickLeft = React.useCallback(() => {
        setActive(prevActive => {
            const index = prevActive.index === 0 ? images.length - 1 : prevActive.index - 1
            return { img: images[index], index }
        })
    }, [])

    return ( 
        <ImageCarouselContainer data-testid="image-carousel">
            <ImagesContainer>
                {
                    currentImages.map(img => (
                        img.id === active.img.id 
                        ? (
                            <ImageBoxCenter>
                                <Image src={img.src} key={img.id} /> 
                                <ImageName>{img.name}</ImageName>
                            </ImageBoxCenter>
                        ) : (
                            images.findIndex(image=>image.id === img.id) < active.index
                            ? (
                                <ImageBoxLeft>
                                    <Image src={img.src} key={img.id}/>
                                </ImageBoxLeft>
                            ) : (
                                <ImageBoxRight>
                                    <Image src={img.src} key={img.id}/>
                                </ImageBoxRight>
                            )
                        )  
                    ))
                }
            </ImagesContainer>
            <Controls>
                <FaChevronLeft onClick={onClickLeft}/>
                <Slider>
                    {images.map((img, index) => (
                        <SliderBar key={img.id} 
                            active={active?.img?.id  === img.id} 
                            onClick={()=>setActive({img, index})}/>
                    ))}
                </Slider>
                <FaChevronRight onClick={onClickRight}/>
            </Controls>
        </ImageCarouselContainer>
    )
}

export default ImageCarousel;

