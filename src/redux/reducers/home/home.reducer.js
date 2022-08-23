import { FILTER_CARDS, DEFITOOL } from '../../actions/index.action';
import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

const initialState = CARD_DATA;
export const CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CARDS:
            return action.payload;
        default:
            return state;
    }
};
