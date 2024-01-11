import fs from "fs";
import path from "path";

export async function GET(request) {
  console.log("GET request received");

  const filePath = path.join(process.cwd(), "public", "Cv.pdf");
  const stat = fs.statSync(filePath);

  // Set response headers
  const headers = new Headers();
  headers.append("Content-Type", "application/pdf");
  headers.append("Content-Length", stat.size);
  headers.append("Content-Disposition", "attachment; filename=Cv.pdf");

  // Send the file stream as the response
  return new Response(fs.createReadStream(filePath), {
    headers,
    status: 200,
  });
}
