export const handleSubmit = (e) => {
  e.preventDefault();

  const form = document.querySelector("form");
  const input = document.getElementById("input").value;
  
  Client.fetchSentimentAnalysis(input);
  form.reset();
};
