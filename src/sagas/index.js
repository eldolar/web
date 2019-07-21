import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_BANKS,
  fetchBanksBegin,
  fetchBanksSuccess,
  fetchBanksFailure
} from '../actions/banksActions'

export function* watchFetchBanks() {
  yield takeLatest(FETCH_BANKS, fetchBanksAsync);
}

function* fetchBanksAsync () {
  try {
    yield put (fetchBanksBegin())
    const data = yield call ( () => 
      fetch('/api/v1/exchanges/now', { mode: 'cors' })
        .then( res => res.json())
    )
    // sanitize data to match with Bank PropTypes
    data.banks.forEach( bank => {
      bank.sell = bank.sell['$numberDecimal']
      bank.buy = bank.buy['$numberDecimal']
    });
    data.createdAt = new Date(data.createdAt).toString()
    yield put (fetchBanksSuccess(data))
  } catch (error) {
    yield put (fetchBanksFailure())
  }
}
