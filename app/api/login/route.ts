import { Password } from "@/data.json";
import { genSaltSync, hashSync } from "bcrypt-ts";

export async function POST(request: Request) {
  const { password: inputPassword } = await request.json();

  if (inputPassword === Password) {
    const salt = genSaltSync(8);
    const hash = hashSync(inputPassword, salt);
    return new Response(JSON.stringify(new Date()), {
      status: 200,
      headers: {
        "Set-Cookie": `session=${hash}; HttpOnly; path=/; Max-Age=2592000; Secure`,
      },
    });
  } else {
    return new Response("Wrong Password", { status: 500 });
  }
}
