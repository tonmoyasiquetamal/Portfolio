import fs from "fs";

export async function GET(request: Request) {
  fs.readFile("./data.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
    }
    {
      const newData = { ...JSON.parse(data)};
      fs.writeFile(
        "test.json",
        new Buffer(JSON.stringify(newData)),
        function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Hello World > test.txt");
          }
        }
      );
    }
  });

  return new Response(JSON.stringify("kljlk"), { status: 200 });
}
