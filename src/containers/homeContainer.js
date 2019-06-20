import { connect } from 'react-redux';
import Home from '../components/Screens/Home';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Home);