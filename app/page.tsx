import Button from "./components/Button/Button";

export default function Page() {
  return (
    <div className="flex flex-col space-y-2">
      <h1>page</h1>
      <h1>page</h1>
      <Button
        key="button"
        text="start wallet"
        colorType="solid"
        buttonContent="default"
      />
      <Button
        text="start wallet"
        colorType="transparent"
        buttonContent="textAndIcon"
      />
      <Button
        text="start wallet"
        colorType="transparent"
        buttonContent="iconOnly"
      />
    </div>
  );
}
