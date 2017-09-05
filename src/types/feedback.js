export type Feedback = {
  sessionId: string,
  eventId: string,
  feedback: ?Rating
}

type Rating = {
  overall: ?number,
  relevance: ?number,
  content: ?number,
  quality: ?number,
  comment: ?string
}

export type FeedbackCritertia = {
  id: string,
  title: string,
  low: ?string,
  high: ?string
}

export type FeedbackResponse = { feedbackId: number }