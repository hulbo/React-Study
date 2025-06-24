export default function StatusMessage({ status }: { status: string }) {
  switch (status) {
    case "loding":
      return <h1>loding</h1>;
    case "success":
      return <h1>success</h1>;
    case "error":
      return <h1>error</h1>;
    default:
      return <h1>default</h1>;
  }
}
