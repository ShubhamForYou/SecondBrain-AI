import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className=" h-screen ">
        <Button
          variant="primary"
          size="sm"
          text="click me"
          startIcon={<ShareIcon size="sm" />}
          endIcon={<PlusIcon size="sm" />}
        />

        <Button
          variant="secondary"
          size="sm"
          text="click me"
          startIcon={<ShareIcon size="lg" />}
          endIcon={<PlusIcon size="lg" />}
        />

        <Button
          variant="primary"
          size="md"
          text="click me"
          startIcon={<PlusIcon size="md" />}
          endIcon={<PlusIcon size="md" />}
        />

        <Button
          variant="secondary"
          size="md"
          text="click me"
          startIcon={<PlusIcon size="md" />}
          endIcon={<PlusIcon size="md" />}
        />

        <Button
          variant="primary"
          size="lg"
          text="click me"
          startIcon={<PlusIcon size="lg" />}
          endIcon={<ShareIcon size="lg" />}
        />

        <Button
          variant="secondary"
          size="lg"
          text="click me"
          startIcon={<PlusIcon size="lg" />}
          endIcon={<Button variant="primary" size="md" text="inner" />}
        />
      </div>
    </>
  );
}

export default App;
