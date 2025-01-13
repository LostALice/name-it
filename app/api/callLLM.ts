// Code by AkinoAlice@TyrantRey

export async function callLLMApi(
  language: string,
  type: string,
  description: string
): Promise<string> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  console.log(
    `LLM's response: ${language} ${type} description: ${description}`
  );

  const payload = {
    messages: [
        {
            "role": "system",
            "content": "Name the user description with corresponding language naming conventions, answer the name only. for example a python function that connect mysql database, your answer: connect_mysql ",
        },
        {
            "role": "user",
            "content": `Name a ${language}'s ${type} that ${description}`
        }
    ],
    model: "gpt-4o-mini",
    temperature: 1,
    max_tokens: 128,
    top_p: 0.1,
  };

  const resp = await fetch(
    "https://models.inference.ai.azure.com/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!resp.ok) {
    console.error(`API request failed with status ${resp.status}`);
  }

  const message = await resp.json()
  return message.choices[0].message.content
}
