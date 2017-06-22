import { connect } from 'react-redux'
import App from '../components/App'

function mapStateToProps (state) {
    return {
        conferences: state.conferences,
        sessions: state.sessions
    }
}

function mapDispatchToProps (dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
