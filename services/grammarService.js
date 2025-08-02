import axios from "axios";

export const checkGrammar = async (text) => {
  try {
    const response = await axios.post("https://api.languagetool.org/v2/check", null, {
      params: { text, language: "en-US" },
    });

    return response.data.matches.map((m) => ({
      error: m.context.text.substr(m.context.offset, m.context.length),
      suggestion: m.replacements.map((r) => r.value).join(", "),
      offset: m.context.offset,
      length: m.context.length,
    }));
  } catch (error) {
    throw new Error("Grammar API failed");
  }
};
