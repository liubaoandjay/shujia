import React, { Component } from 'react'
import axios from 'axios'

class Detail extends Component {
    state = {
        arr: []
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id)
        axios.get(`/api/detail?id=${id}`).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    arr: res.data.data
                })
            }
        })
    }

    render() {
        let { arr } = this.state
        return (
            <div>
                <img src={arr.avatar} alt="" />
                <p>{arr.summary}</p>
            </div>
        )
    }
}
export default Detail