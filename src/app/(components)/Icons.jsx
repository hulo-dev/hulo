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
