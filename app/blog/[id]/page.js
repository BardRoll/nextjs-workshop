export default async function BlogId({ params }) {
  const { id } = await params;
  return (
    <>
      <div>Hello Blog {id}</div>
    </>
  );
}
