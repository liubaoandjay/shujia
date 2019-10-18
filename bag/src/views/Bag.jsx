import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bag extends Component {

    
    handleDetail(index){
        let datas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
        datas.splice(index,1)
        localStorage.setItem('data',JSON.stringify(datas))
        this.props.onSetState('data', datas)
    }

    componentDidMount() {
        let datas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
        this.props.onSetState('data', datas)
    }
    
    render() {
        let { data } = this.props
        return (
            <div>
                <ul>
                    {data.map( (item,index) => <li key={item.id}>
                        {item.title} <button onClick={this.handleDetail.bind(this,index)}>删除</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        data: state.data
    }
}

const mapPropsState = (dispatch) => {
    return {
        onSetState(key, value) {
            dispatch({ type: "SET_STATE", key, value })
        }
    }
}

export default connect(mapState, mapPropsState)(Bag)