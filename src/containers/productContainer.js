import { connect } from 'react-redux';
import Product from '../components/Screens/Product';

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
};

export default connect(mapStateToProps,null)(Product);