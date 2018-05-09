import React from "react"
import { Redirect } from "react-router"
class Header extends React.Component {
  state = {
    newsOutlet: "",
    refire: false
  }

  handleClick = (event) => {
    this.setState({
      newsOutlet: event.target.className,
      refire: true
    })
  }

  render() {
    const { refire } = this.state;

     if (refire) {
       return <Redirect to={`/${this.state.newsOutlet}`}/>;
     }

    return (
      <div className="head">
        <h1 className="title">News Sentiment</h1>
        <img alt="news" onClick={this.handleClick} className="Fox" src="https://www.aim.org/wp-content/uploads/2017/04/b8b06e59-a557-4972-8dfc-da93b84e47b7.png"/>
        <img alt="news" onClick={this.handleClick} className="BBC" src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/7e/16/20/7e1620ae-a7ac-f08f-5230-71a12cbfa123/AppIconGNL-1x_U007emarketing-0-85-220-9.png/246x0w.jpg"/>
        <img alt="news" onClick={this.handleClick} className="ABC" src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/79/fc/08/79fc084d-004c-320e-508d-be42ee0d1006/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg"/>
        <img alt="news" onClick={this.handleClick} className="NewYorkTimes" src="data:image/png;base64,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"/>
        <img alt="news" onClick={this.handleClick} className="CNN" src="https://cdn.cnn.com/cnn/.e1mo/img/4.0/logos/CNN_logo_400x400.png"/>
      </div>
    )
  }
}

export default Header
