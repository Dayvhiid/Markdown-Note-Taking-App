import { extractText } from "../services/fileService.js";
import { checkGrammar } from "../services/grammarService.js";
import { marked } from "marked";

export const handleFileUpload = async (req, res) => {
  try {
    let content = await extractText(req.file.path);
    const mistakes = await checkGrammar(content);

    // Sort mistakes by offset descending (so we don't break indexes when inserting spans)
    const sortedMistakes = [...mistakes].sort((a, b) => b.offset - a.offset);

    sortedMistakes.forEach(m => {
      const before = content.slice(0, m.offset);
      const wrong = content.substr(m.offset, m.length);
      const after = content.slice(m.offset + m.length);

      content = `${before}<span class="highlight">${wrong}</span>${after}`;
    });

    const htmlContent = marked.parse(content);

    res.render("result", { htmlContent, mistakes });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error processing the file");
  }
};
