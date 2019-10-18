import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Nav extends Component {
    componentDidMount() {
        // let { currentId } = this.props;
        axios.get('/api/list').then(res => {
            if (res.data.code === 200) {
                this.props.setState('navList', res.data.data)
            }
        })
        axios.get(`/api/data?id=0`).then(res => {
            if (res.data.code === 200) {
                this.props.setState('dataList', res.data.data);
            }
        })
        this.props.setState('currentId',0)
    }

    handleClick(id) {
        this.props.setState('currentId', id);
        axios.get(`/api/data?id=${id}`).then(res => {
            if (res.data.code === 200) {
                this.props.setState('dataList', res.data.data);
            }
        })
        
    }
    handlecollect(el) {
        let datas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
        datas.push(el)
        this.props.setState('data', datas)
        localStorage.setItem('data', JSON.stringify(datas))
    }

    handleDetail(id){
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        console.log(this.props)
        let { navList, currentId, dataList } = this.props;
        let datas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
        console.log(datas)
        return (
            <div>
                <div>
                    <ul className="list">
                        {navList.map(item => <li key={item.id} onClick={this.handleClick.bind(this, item.id)} className={item.id === currentId ? 'active' : ''}>{item.title}</li>)}
                    </ul>
                    <div>
                        {dataList.map(item => <div key={item.id}>
                            <span>{item.title}</span>
                            <button onClick={this.handleDetail.bind(this,item.id)}>详情</button>
                           {datas.find(book => book.id === item.id) ? <button>已收藏</button> : <button onClick={this.handlecollect.bind(this, item)}>收藏</button> }  
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navList: state.navList,
        currentId: state.currentId,
        dataList: state.dataList,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setState(key, value) {
            dispatch({ type: 'SET_STATE', key, value })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))