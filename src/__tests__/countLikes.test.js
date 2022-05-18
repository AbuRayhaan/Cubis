import { likeslist } from '../__mocks__/fetchApi.js';
import countLike from '../modules/countLikes.js';

test('count likes for certain item', () => {
  const likes = likeslist();
  const itemId = '52874';
  const count = countLike(likes, itemId);
  expect(count).toBe(4);
});
