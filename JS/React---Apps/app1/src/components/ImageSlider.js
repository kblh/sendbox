import React from "react";

class ImageSlider extends React.Component {
  state = {
    images: [
      "https://picsum.photos/g/600/300?image=0",
      "https://picsum.photos/g/600/300?image=1",
      "https://picsum.photos/g/600/300?image=2",
      "https://picsum.photos/g/600/300?image=3",
      "https://picsum.photos/g/600/300?image=4",
      "https://picsum.photos/g/600/300?image=5",
    ],
    idx: 0
  };

  handleNext = () => {
    if(this.state.idx < this.state.images.length - 1) {
      this.setState({
        idx: this.state.idx + 1
      });
    }
  };

  handlePrev = () => {
    if(this.state.idx > 0) {
      this.setState({
        idx: this.state.idx - 1
      });
    }
  };

  render() {
    return (
      <div>
          <p>{this.state.idx} / {this.state.images.length}</p>
          <p>
            <button onClick={this.handlePrev}>prev</button>
            <button onClick={this.handleNext}>next</button>
          </p>
          <p><img src={this.state.images[this.state.idx]} alt={this.state.idx} /></p>
      </div>
    );
  }
}

export default ImageSlider;
