import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RCTG from 'react-addons-css-transition-group';
import "./style.scss";

export default class ReactPreview extends Component {
  static wrapper = null;
  static preview(content) {
    ReactPreview.setUp();
    ReactDOM.render(<ReactPreview content={content} />, ReactPreview.wrapper, () => {
      
    })
  }

  static setUp() {
    let wrapper = document.createElement('div');
    ReactPreview.wrapper = wrapper;
    document.body.appendChild(wrapper);
  }

  static defaultProps = {
    type: 'img'
  }

  remove() {
    ReactDOM.unmountComponentAtNode(ReactPreview.wrapper);
    document.body.removeChild(ReactPreview.wrapper);
  }

  render() {
    return (
      <RCTG transitionName="react-preview-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false} >
        <div className="react-preview-bg">
          <div className="react-preview-container">
            <div className="react-preview-content">
            {/* 根据props的type判断显示的html标签：img， video */}
            { this.props.content }
            </div>
            <div className="react-preview-close" onClick={ e=>this.remove(e) }>关闭</div>
          </div>
        </div>
      </RCTG>
    )
  }
}