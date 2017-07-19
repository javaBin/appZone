import { connect } from 'react-redux'
import App from '../components/App'

function mapStateToProps (state) {
    return {
        conferences: state.conferences,
        sessions: state.sessions
    }
}

export default connect(mapStateToProps)(App)
