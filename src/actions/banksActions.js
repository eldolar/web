export const FETCH_BANKS_BEGIN   = 'FETCH_BANKS_BEGIN';
export const FETCH_BANKS_SUCCESS = 'FETCH_BANKS_SUCCESS';
export const FETCH_BANKS_FAILURE = 'FETCH_BANKS_FAILURE';
export const FETCH_BANKS = 'FETCH_BANKS';

export const fetchBanksBegin = () => ({
  type: FETCH_BANKS_BEGIN
});

export const fetchBanksSuccess = banks => {
  return {
    type: FETCH_BANKS_SUCCESS,
    banks
  }
}

export const fetchBanksFailure = error => ({
  type: FETCH_BANKS_FAILURE,
  payload: { error }
});

export const fetchBanks = () => ({
  type: FETCH_BANKS
})