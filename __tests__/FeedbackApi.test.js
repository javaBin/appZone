import { postFeedbackTest } from '../src/sagas/FeedbackApi';

function postFeedback(feedback) {
  var test= postFeedbackTest(feedback);
  console.log(test);
  return feedback;
}

test('call feedback object', () => {
  expect(postFeedback({
    overall: 3,
    relevance: 2,
    content: 3,
    quality: 4,
    comment: "not bad"
  })).not.toBeNull();
})    

function sum(a, b) {
  return a + b;
}
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});