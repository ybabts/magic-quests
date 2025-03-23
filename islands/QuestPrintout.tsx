interface Quests {
  static: string[];
  random: string[];
  numberOfRandomQuests: number;
}

export function QuestPrintout(
  props: { quests: Quests },
) {
  return (
    <div class="flex flex-col items-center p-5 py-8 w-100 border-dashed border-gray-300 border-1 break-inside-avoid">
      <h1 class="font-bold text-xl">Magic Monday</h1>
      <h2 class="italic text-md">Quests</h2>
      <ul>
        {generateRandomQuests(props.quests).map((quest, index) => (
          <li key={index}>
            <input type="checkbox" class="mr-1" />
            {quest}
          </li>
        ))}
      </ul>
    </div>
  );
}

function generateRandomQuests(quests: Quests) {
  const randomQuestsToPrint = [...quests.static];
  for (let i = 0; i < quests.numberOfRandomQuests; i++) {
    const index = Math.floor(Math.random() * quests.random.length);
    randomQuestsToPrint.push(quests.random[index]);
    quests.random.splice(index, 1);
  }
  return randomQuestsToPrint;
}
