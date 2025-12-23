import { useState } from "react";
import { CreateContentModal } from "./components/modal/CreateContentModal";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Sidebar } from "./components/ui/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <Sidebar />
      <div className="ml-60 bg-content-bg min-h-screen p-4">
        <CreateContentModal
          open={modalOpen}
          // @ts-ignore
          onClose={() => setModalOpen(false)}
        />
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
            onClick={() => setModalOpen(true)}
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
      </div>
    </div>
  );
}

export default App;
