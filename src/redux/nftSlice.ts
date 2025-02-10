import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

// Define a type for the slice state
export interface nftState {
  _id: string;
  title: string;
  creator: string;
  details: string;
  tags: [string];
  sold: boolean;
  autionTime: string;
  nft_picture: [string];
  hotbid: boolean;
}
type nftsState = {
  nfts: nftState[];
  soldNfts: nftState[];
  hotNft: nftState[];
};
// Define the initial state using that type
const initialState: nftsState = {
  nfts: [],
  soldNfts: [],
  hotNft: [],
};

export const nftSlice = createSlice({
  name: 'nfts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNfts: (state, action) => {
      let sold = action.payload.filter(item => item.sold == true);
      let hot = action.payload.filter(item => item.hotbid == true);

      state.soldNfts = sold;
      state.hotNft = hot;
      state.nfts = [...action.payload];
    },
  },
});

export const {addNfts} = nftSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.nfts;

export default nftSlice.reducer;
