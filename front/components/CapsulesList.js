import React from 'react'
import { connect } from 'react-redux'
import Capsule from './Capsule'
import { fetchCapsules } from '../actions'

const mapStateToProps = (state) => {
  return {
    capsules: state.capsules,
    search: state.search,
    filtered: state.filtered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCapsules () {
      dispatch(fetchCapsules())
    }
  }
}

class CapsulesList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      capsules: this.props.capsules,
      search: '',
      filtered: this.props.capsules
    }

    this.onSearch = this.onSearch.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      capsule: nextProps.capsules,
      filtered: nextProps.filtered
    })
  }
  render () {
    if (this.props.capsules.length === 0) {
      return (
        <section className="loaders"></section>
      )
    }
    return (
      <section>
        <header className="search-bars">
          <h1 className="headers">Capsules</h1>
          <form>
            <label htmlFor="search"><i className="material-icons m">search</i></label>
            <input id="search" value={this.state.search} onChange={this.onSearch}/>
          </form>
        </header>
        <ul className="capsules-lists">
          {this.state.filtered.map((capsule, index) => (
            <Capsule key={index} {...capsule} />
          ))}
        </ul>
      </section>
    )
  }
  onSearch (event) {
    let search = event.target.value
    let filtered = this.props.capsules.filter((capsule) => {
      let pattern = new RegExp(search, 'i')
      return pattern.test(capsule.title) || pattern.test(capsule.summary)
    })
    this.setState({
      capsules: this.props.capsules,
      search: search,
      filtered: filtered
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CapsulesList)
