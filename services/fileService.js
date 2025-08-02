import { promises as fs } from "fs";

export const extractText = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    throw new Error("Error reading file");
  }
};
