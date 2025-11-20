export function GET() {
  return Response.json([
    { id: 1, title: "abc", content: "Hello World" },
    { id: 2, title: "def", content: "Hello World" },
    { id: 3, title: "ghi", content: "Hello World" },
  ]);
}
