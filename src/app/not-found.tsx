import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap section-space not-found">
      <p className="eyebrow">Page unavailable</p>
      <h1>Page not found.</h1>
      <Link className="button button-dark" href="/">Back to home</Link>
    </section>
  );
}
