const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
    return (
        <div className="carousel-indicators">
            {slides.map((_i, index) => (
                <button
                    key={_i}
                    className={`carousel-indicator-item${
                        currentIndex === index ? " active " : ""
                    }`}
                    onClick={() => switchIndex(index)}
                ></button>
            ))}
        </div>
    );
};

export default CarouselIndicators;