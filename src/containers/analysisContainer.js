import { connect } from 'react-redux';
import Analysis from '../components/Screens/Analysis';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Analysis);