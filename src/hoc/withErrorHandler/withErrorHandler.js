import React,  { Fragment, Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            this.req = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.res = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.req)
            axios.interceptors.response.eject(this.res)
        }

        modalClickHandler () {
            this.setState({error: null})
        }

        render () {
            return (
                <Fragment>
                    <Modal show={this.state.error} close={() => this.modalClickHandler()}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )    
        }
    }
}

export default withErrorHandler