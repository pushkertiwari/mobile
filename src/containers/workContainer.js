import { connect } from 'react-redux';
import Work from '../components/Screens/Work';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Work);