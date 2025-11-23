import Button from "../components/common/Button";
import Header from "../components/layout/Header";


export default function AboutPage() {
  return (
    <>
    <Header />
    <div className="p-10">
      <h1 className="text-2xl font-semibold">About Page</h1>
    </div>
     <div className="p-10 flex gap-4">
      <Button size="small" label="Small" shape="rounded-sm" />
      <Button size="medium" label="Medium" shape="rounded-md" />
      <Button size="large" label="Large" shape="rounded-full" />
    </div>
    </>
  );
}
