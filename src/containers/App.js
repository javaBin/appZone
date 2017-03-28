import { connect } from 'react-redux'
import App from '../components/App'

function mapStateToProps (state) {
    return {
        something: true
    }
}

function mapDispatchToProps (dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
