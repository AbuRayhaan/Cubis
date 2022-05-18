import { mealList } from '../__mocks__/fetchApi.js';
import countMeals from '../modules/countMeals.js';

test('count meals on page', () => {
  const meals = mealList();
  const count = countMeals(meals);
  expect(count).toBe(4);
});
