import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardPostType, ItemType } from "../../Utils/globalTypes";

type PostStateType = {
  postModalImgVisible: boolean;
  selectedPost: CardPostType | null;
  textPost: any;
};

const INITIAL_STATE: PostStateType = {
  postModalImgVisible: false,
  selectedPost: null,

  textPost: null,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    setPostModalImgVisible: (state, action: PayloadAction<boolean>) => {
      state.postModalImgVisible = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedPost = action.payload;
    },
    textPost: (state, action: PayloadAction<ItemType>) => {
      state.textPost = action.payload;
    },
  },
});

export default postsReducer.reducer;

export const { setPostModalImgVisible, setSelectedPost, textPost } =
  postsReducer.actions;
