import { connect } from 'react-redux';
import Cloud from '../components/Screens/cloud';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Cloud);