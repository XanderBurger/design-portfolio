import fs from "fs";
import path from "path";

export function getImagesUrls() {
  const imagesDirectory = path.join(process.cwd(), "public/workImages"); // Adjust to your folder path

  // Read the directory contents
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Map the file names to their relative public path URLs
  const imageUrls = imageFiles.map((file) => `/workImages/${file}`);

  return imageUrls;
}
