import routes from "./routes"

function checkForErrors(response: Response): void {
  if (!response.ok) {
    throw new Error(
      `An error occurred: ${response.status} ${response.statusText}`
    )
  }
}

export async function getTextAnswer(question: string): Promise<string> {
  try {
    const res = await fetch(routes.getTextAnswer(question), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }

    const responseText = await res.text()

    return await responseText
  } catch (error) {
    console.error("Error submitting API request:", error)
  }
}
