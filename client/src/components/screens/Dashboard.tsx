import { useEffect, useState } from "react";
import { CreateContentModal } from "../../components/modal/CreateContentModal";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { PlusIcon } from "../../icons/PlusIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { Sidebar } from "../../components/ui/Sidebar";

import { useContent } from "../../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  useEffect(() => {
    refresh();
  }, [modalOpen]);
  return (
    <div>
      <Sidebar />
      <div className="ml-60 bg-content-bg min-h-screen m-1">
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

        <div className="flex flex-wrap items-start gap-4 p-4 ">
          {contents.map((c: any) => (
            <Card title={c.title} link={c.link} type={c.type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
