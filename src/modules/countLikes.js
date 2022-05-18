const countLike = (likesList, itemId) => {
  const itemLikes = likesList.find((l) => l.item_id === itemId);
  let likeCount = 0;
  if (itemLikes !== undefined) {
    likeCount = itemLikes.likes;
  } else {
    likeCount = 0;
  }

  return likeCount;
};

export default countLike;
