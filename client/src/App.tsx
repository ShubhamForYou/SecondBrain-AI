import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <div className=" h-screen ">
        <Button
          variant="primary"
          size="sm"
          text="click me"
          startIcon={<PlusIcon size="sm" />}
          endIcon={"-"}
        />

        <Button
          variant="secondary"
          size="sm"
          text="click me"
          startIcon={<PlusIcon size="sm" />}
          endIcon={"-"}
        />

        <Button
          variant="primary"
          size="md"
          text="click me"
          startIcon={<PlusIcon size="md" />}
          endIcon={"-"}
        />

        <Button
          variant="secondary"
          size="md"
          text="click me"
          startIcon={<PlusIcon size="md" />}
          endIcon={"-"}
        />

        <Button
          variant="primary"
          size="lg"
          text="click me"
          startIcon={<PlusIcon size="lg" />}
          endIcon={"-"}
        />

        <Button
          variant="secondary"
          size="lg"
          text="click me"
          startIcon={<PlusIcon size="lg" />}
          endIcon={"-"}
        />
      </div>
    </>
  );
}

export default App;
