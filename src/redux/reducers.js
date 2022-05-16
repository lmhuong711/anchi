/** @format */

import {combineReducers} from 'redux';

import {
  CREATE_FOOD,
  CREATE_INGREDIENT,
  CREATE_TAG,
  FLUSH_LOCAL,
} from './actions';

import {
  FOOD_DATA,
  RESTAURANT_DATA,
  TAG_DATA,
  INGREDIENT_DATA,
  FAVORITE_DATA,
  BLACKLIST_DATA,
} from './initialData';

const foodReducer = (state = FOOD_DATA, action) => {
  switch (action.type) {
    case CREATE_FOOD: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const restaurantReducer = (state = RESTAURANT_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const tagsReducer = (state = TAG_DATA, action) => {
  switch (action.type) {
    case CREATE_TAG: {
      const newKey = state.lastKey + 1;
      return {
        lastKey: newKey,
        data: [...state.data, {title: action.payload, id: newKey}],
      };
    }
    default: {
      return state;
    }
  }
};

const ingredientsReducer = (state = INGREDIENT_DATA, action) => {
  switch (action.type) {
    case CREATE_INGREDIENT: {
      const newKey = state.lastKey + 1;
      return {
        lastKey: newKey,
        data: [...state.data, {title: action.payload, id: newKey}],
      };
    }
    default: {
      return state;
    }
  }
};

const favoriteReducer = (state = FAVORITE_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const blacklistReducer = (state = BLACKLIST_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  food: foodReducer,
  restaurant: restaurantReducer,
  tags: tagsReducer,
  ingredients: ingredientsReducer,
  favorite: favoriteReducer,
  blacklist: blacklistReducer,
});

const reducer = (state, action) => {
  switch (action.type) {
    case FLUSH_LOCAL: {
      return rootReducer(undefined, action);
    }
    default: {
      return rootReducer(state, action);
    }
  }
};

export default reducer;
