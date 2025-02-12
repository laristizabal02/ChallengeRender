import Question from '../models/Question.js';

export default async () => {
  try {
    await Question.deleteMany()
  } catch (err) {
    throw err;
  }
}
