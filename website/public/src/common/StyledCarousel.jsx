import { Carousel } from "react-bootstrap";
import styled from 'styled-components'

const StyledCarousel = styled(Carousel)`
    .carousel-control-prev,
    .carousel-control-next {
        width: 40px;
        height: 40px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.8;
        transition: opacity 0.2s;
        background: none;

        &:hover {
            opacity: 1;
        }
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: #212529;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-size: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel-control-prev {
        left: 45px;
    }

    .carousel-control-next {
        right: 45px;
    }

    .carousel-indicators {
        button {
            background-color: #212529;
            opacity: 0.4;
            width: 30px;
            height: 4px;
            border-radius: 2px;
            margin: 0 3px;
            transition: opacity 0.3s ease;

            &.active {
                opacity: 1;
            }
        }
    }
`;

export default StyledCarousel