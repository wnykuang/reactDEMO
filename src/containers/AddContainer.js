import {connect} from "react-redux";
import React from 'react';
import AddComponent from "../components/AddComponent"

const stateToPropertyMapper = state => ({
    paramA: state.a,
    paramB: state.b
})

const AddContainer = connect(
    stateToPropertyMapper,
    dispatch => ({
        paramAchanged : (a) => dispatch({type: 'A_CHANGED', newA : a}),
        paramBchanged : (b) => dispatch({type: 'B_CHANGED', newB : b})
    })
)(AddComponent)

export default AddContainer