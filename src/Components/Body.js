import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllSnacks, getAllReviews} from '../actions'

import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class Body extends Component {
  componentDidMount(){
    this.props.getAllSnacks()
    this.props.getAllReviews()
  }

  render = () => (
      <BrowserRouter>
        <div>
          <Banner />
          <Switch>
            <Route exact path='/:snackId' component={ SnackPage } />
            <Route exact path='/' component={ SnackBasket } />
          </Switch>
         </div>
       </BrowserRouter>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({getAllSnacks,getAllReviews}, dispatch)
export default connect(null,mapDispatchToProps)(Body)
