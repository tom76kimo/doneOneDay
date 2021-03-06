import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'

const facebookLoginComponent = (
  <a href="/auth/facebook">
    <IconButton
      touch
      tooltip="Facebook 登入"
      tooltipPosition="bottom-left" >
      <div className="fb-icon">
        <i className="fa fa-facebook-official"></i>
      </div>
    </IconButton>
  </a>
)

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      leftNavOpen: false
    }
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this)
    this.onLeftNavChange = this.onLeftNavChange.bind(this)
  }

  render () {
    return (
      <AppBar
        onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
        title='讀經列車'
        iconElementRight={facebookLoginComponent} >
        <LeftNav
          docked={false}
          width={200}
          open={this.state.leftNavOpen}
          onRequestChange={this.onLeftNavChange}
          >
          <Link to="/statistic"><MenuItem>統計資料</MenuItem></Link>
          <Link to="/"><MenuItem>首頁</MenuItem></Link>
        </LeftNav>
      </AppBar>
    )
  }

  onLeftIconButtonTouchTap () {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    })
  }

  onLeftNavChange (open) {
    this.setState({
      leftNavOpen: open
    })
  }
}

export default Header
