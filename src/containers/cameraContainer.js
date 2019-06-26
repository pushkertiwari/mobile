import { connect } from 'react-redux';
import Camera from '../components/Screens/Camera';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Camera);