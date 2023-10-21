import { writeFile } from "fs";
import { join } from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    const imageName = new Date().getTime() + image.name;
    const path = join(process.cwd(), "public/");
    writeFile(
      path + imageName,
      Buffer.from(await image.arrayBuffer()),
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
      }
    );
    return new Response(JSON.stringify({imageUrl:`/${imageName}`}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed", { status: 500 });
  }
}
