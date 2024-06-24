import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCSvSOhNsBGjMl4kyHVCQuRx4B4cPQ_qDc");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run(req, res, next) {
  // For text-only input, use the gemini-pro model

  const { input } = req.body;

  const result = await model.generateContent(input);
  const { response } = result;
  req.data = response.text();
  // req.data = result;
  next();
}

export default run;
