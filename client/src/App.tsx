import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="flex gap-4 justify-end p-2">
        <Button
          text="Share Brain"
          variant="secondary"
          size="md"
          startIcon={<ShareIcon size="md" />}
        />
        <Button
          variant="primary"
          size="md"
          startIcon={<PlusIcon size="md" />}
          text="Add Content"
        />
      </div>

      <div className="flex items-start gap-4 ">
        <Card
          title="Managing"
          link="https://x.com/k_dense_ai/status/2001752844958076967"
          type="twitter"
        />
        <Card
          title="What is MPC"
          link="https://www.youtube.com/watch?v=cqDQV5g7zHo"
          type="youtube"
        />
        <Card
          title="Managing Deepagents Memory"
          link="https://x.com/k_dense_ai/status/2001752844958076967"
          type="twitter"
        />
      </div>
    </>
  );
}

export default App;
