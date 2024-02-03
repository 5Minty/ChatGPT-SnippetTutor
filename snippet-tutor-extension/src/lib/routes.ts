const routes = {
  getTextAnswer: (question: string) =>
    `${process.env.PLASMO_PUBLIC_API_URL}/api/question/text`
}

export default routes
