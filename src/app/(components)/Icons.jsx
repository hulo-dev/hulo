export const Quotes = () => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.9261 24.4476V39.2956H4.80078V24.4476L14.659 9.59961H19.9261L10.2869 24.4226L19.9261 24.4476Z"
                fill="white"
            />
            <path
                d="M42.4847 24.4476V39.2956H27.3594V24.4476L37.2176 9.59961H42.4847L32.8456 24.4226L42.4847 24.4476Z"
                fill="white"
            />
        </svg>
    );
};

export const DiagonalArrow = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 1H15M15 1V16M15 1L0 16"
                stroke="white"
                strokeWidth="2"
            />
        </svg>
    );
};

export const DiagonalArrowWithBorderUp = () => {
    return (
        <svg
            className="a"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M33 33H17M17 33V17M17 33L33 17"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const DiagonalArrowWithBorderDown = () => {
    return (
        <svg
            className="a"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 17H33M33 17V33M33 17L17 33"
                stroke="white"
                strokeWidth="2"
            />
            <rect
                x="1"
                y="1"
                width="48"
                height="48"
                rx="12"
                stroke="white"
                strokeOpacity="0.2"
            />
        </svg>
    );
};

export const TestIcon = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 300"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="sliderSvg" clipPathUnits="objectBoundingBox">
                <path
                    // d="M0 0 L 1000 0 L 1000 240 Q 1000 250 990 250 L 660 250 Q 650 250 650 260 L 650 290 Q 650 300 640 300 L 0 300 Z"
                    // d="M0 0 L 1 0 L 1 0.24 Q 1 0.25 0.99 0.25 L 0.66 0.25 Q 0.65 0.25 0.65 0.26 L 0.65 0.29 Q 0.65 0.3 0.64 0.3 L 0 0.3 Z"
                    // d="M0 0 L 1 0 L 1 0.8 Q 1 0.85 0.95 0.85 L 0.66 0.84 Q 0.65 0.84 0.65 0.85 L 0.65 0.99 Q 0.65 1 0.64 1 L 0 1 Z"
                    d="M0 0 L 1 0 L 1 0.8 Q 1 0.85 0.95 0.85 L 0.66 0.84 Q 0.65 0.84 0.65 0.85 L 0.65 0.99 Q 0.65 1 0.64 1 L 0 1 Z"
                    stroke="white"
                    strokeWidth="2"
                />
            </clipPath>
        </svg>
    );
};
