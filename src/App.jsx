import { useState } from "react";
import Carousel from "./carousel/Carousel";

function App() {
    const slides = [
        "https://picsum.photos/id/450/1280/400",
        "https://picsum.photos/id/369/1280/400",
        "https://picsum.photos/id/41/1280/400",
        "https://picsum.photos/id/649/1280/400",
        "https://picsum.photos/id/583/1280/400",
    ];

    return (
        <div className="container">
            <h1 className="title">Carousel React from scratch</h1>
            <Carousel slides={slides} controls indicators width={1200} />
        </div>
    );
}

export default App;
