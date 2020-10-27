export const fetchSentimentAnalysis = async (input) => {
  const response = await fetch("http://localhost:8081/api", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ input })
  });

  try {
    const data = await response.json();

    document.getElementById("text").innerHTML = input;
    document.getElementById("agreement").innerHTML = data.agreement;
    document.getElementById("subjectivity").innerHTML = data.subjectivity;
    document.getElementById("irony").innerHTML = data.irony;
    document.getElementById("confidence").innerHTML = data.confidence;
  } catch(error) {
    console.log(error);
  }
}
