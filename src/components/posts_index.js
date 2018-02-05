import _ from 'lodash'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { posts } from '../reducers/index'
import { Link } from 'react-router-dom'

class PostsIndex extends Component {



  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.id}
        </li>
      )
    })
  }

  render() {
    //console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add A Post
          </Link>
        </div>
        <h2>Posts</h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

// unction mapStateToProps(state){
//   return { : state.weather}
// }

export default connect((state)=>{return{posts: state.posts}}, { fetchPosts })(PostsIndex)
