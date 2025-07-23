import React from "react";
import { Button } from "../components/common/Button";
import { Play, Download, Settings, Trash2 } from "lucide-react";
import "../index.css";

const TemPage = () => (
  <div className="p-8 space-y-8">
    <h1 className="text-2xl font-bold mb-4">Button Showcase</h1>
    {/* Basic variants */}
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Start Game</Button>
      <Button variant="secondary">Settings</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
    {/* With icons */}
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        <Play className="mr-2" />
        Start Game
      </Button>
      <Button variant="secondary">
        <Settings className="mr-2" />
        Settings
      </Button>
      <Button variant="danger">
        <Trash2 className="mr-2" />
        Delete
      </Button>
      <Button variant="outline">
        <Download className="mr-2" />
        Download
      </Button>
    </div>
    {/* Loading state */}
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" isLoading>
        Processing...
      </Button>
      <Button variant="danger" isLoading>
        Deleting...
      </Button>
    </div>
    {/* Different sizes */}
    <div className="flex flex-wrap gap-4 items-end">
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="default">
        Default
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button variant="primary" size="icon">
        <Play />
      </Button>
    </div>
    {/* Disabled */}
    <div className="flex flex-wrap gap-4">
      <Button variant="disabled" disabled>
        Can't Click
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  </div>
);

export default TemPage;
