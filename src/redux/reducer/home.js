const initHome = {
  product: [],
  isSave: false,
  isUpdate: false,
  isDelete: false,
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_PRODUCT') {
    return {
      ...state,
      product: action.value,
    };
  }
  if (action.type === 'IS_SAVE') {
    return {
      ...state,
      isSave: action.value,
    };
  }
  if (action.type === 'IS_UPDATE') {
    return {
      ...state,
      isUpdate: action.value,
    };
  }
  if (action.type === 'IS_DELETE') {
    return {
      ...state,
      isDelete: action.value,
    };
  }

  return state;
};
