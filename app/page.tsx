import { Button } from "./components/Button/Button";
import { CameraIcon } from "./components/Icons/CameraIcon";

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
        icon={<CameraIcon width="20px" height="20px" />}
      />
      <Button
        colorType="transparent"
        buttonContent="iconOnly"
        icon={<CameraIcon width="20px" height="20px" />}
      />
      <Button
        text="start wallet"
        colorType="transparent"
        buttonContent="textAndIcon"
        icon={<CameraIcon width="20px" height="20px" />}
        fullWidth
      />
    </div>
  );
}
