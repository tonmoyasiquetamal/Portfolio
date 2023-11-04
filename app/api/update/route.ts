import fs from "fs";

export async function POST(request: Request) {
  const newData = await request.json();
  const buffer = new Buffer(JSON.stringify(newData));
  let error;

  // rewrite the file
  fs.writeFile("data.json", buffer, (e) => (error = e));

  if (error) {
    return new Response("Server error", { status: 500 });
  } else {
    return new Response(JSON.stringify(newData), { status: 200 });
  }
}
