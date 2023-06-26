export default {
  getIsModalImgVisible: (state: any) => state.postsReducer.postModalImgVisible,
  getSelectedPost: (state: any) => state.postsReducer.selectedPost,
  getText: (state: any) => state.postsReducer.textPost,
};
