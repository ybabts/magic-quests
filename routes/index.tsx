import { useSignal } from "@preact/signals";
import { QuestGenerator } from "../islands/QuestGenerator.tsx";

export default function Home() {
  const count = useSignal(3);
  return <QuestGenerator />;
}
