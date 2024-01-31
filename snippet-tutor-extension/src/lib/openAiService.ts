import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.PLASMO_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

function checkForErrors(response: Response): void {
  if (!response.ok) {
    throw new Error(
      `An error occurred: ${response.status} ${response.statusText}`
    )
  }
}

export async function getTextAnswer(question: string) {
  const answer = await openai.chat.completions.create({
    messages: [{ role: "system", content: question }],
    model: "gpt-3.5-turbo"
  })

  return answer.choices[0].message.content
}
