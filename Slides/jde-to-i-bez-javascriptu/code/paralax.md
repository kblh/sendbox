```css
body {
    margin: 0;
    height: 100vh;
    perspective: 1px;
    transform-style: preserve-3d;
    overflow-x:hidden;
    overflow-y:auto;
}

.parallax-wrapper {
    width: 100vw;
    height:100vh;
    padding-top:20vh;
    box-sizing: border-box;
    transform-style: preserve-3d;
}

.parallax-wrapper::before {
    content:"";
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    background-image: url('https://picsum.photos/id/800/600/300?blur=2&grayscale');
    background-size: cover;
    position: absolute;
    z-index: -1;
    transform: translateZ(-1px) scale(2);
}
```
