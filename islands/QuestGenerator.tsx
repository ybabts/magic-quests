import { useState } from "preact/hooks";
import { QuestPrintout } from "./QuestPrintout.tsx";

const defaultQuests = {
  static: [
    "Play a game with an unmodified precon",
  ],
  random: [
    "Reach 80 life in a game",
    "Attack each opponent in a single turn",
    "Draw 5 cards in a single turn",
    "Save an opponent from lethal damage",
    "Save an opponent's permanent",
    "Control 10 or more lands",
    "Control 5 or more nontoken creatures",
    "Control 5 or more nontoken artifacts",
  ],
};

const defaultNumberOfRandomQuests = 4;

export function QuestGenerator() {
  const [staticQuests, setStaticQuests] = useState(
    defaultQuests.static.join("\n"),
  );
  const [randomQuests, setRandomQuests] = useState(
    defaultQuests.random.join("\n"),
  );
  const [numberOfRandomQuests, setNumberOfRandomQuests] = useState(
    defaultNumberOfRandomQuests,
  );
  return (
    <div>
      <div class="print:hidden w-3/4 m-auto py-6">
        <h1 class="font-bold text-xl text-center">
          Magic Monday Quest Generator
        </h1>
        <h3 class="font-bold">
          Static Quests
        </h3>
        <textarea
          class="p-1 px-3 w-full h-52 border-gray-500 border-1 rounded"
          onChange={(e) => setStaticQuests(e.currentTarget.value)}
          value={staticQuests}
          id="staticQuests"
        />
        <h3 class="font-bold">Random Quests</h3>
        <textarea
          class="p-1 px-3 w-full h-52 border-gray-500 border-1 rounded"
          onChange={(e) => setRandomQuests(e.currentTarget.value)}
          id="randomQuests"
          value={randomQuests}
        />
        <div class="flex justify-between mt-3">
          <div>
            <h3 class="font-bold">Number of Random Quests</h3>
            <input
              type="number"
              id="numberOfRandomQuests"
              class="p-1 border-1 border-gray-500 rounded"
              onChange={(e) => setNumberOfRandomQuests(+e.currentTarget.value)}
              value={numberOfRandomQuests}
            />
          </div>
          <button
            class="px-3 border-gray-500 bg-slate-300 border-1 rounded"
            onClick={() => globalThis.print()}
          >
            Generate Printout
          </button>
        </div>
      </div>
      <div class="!print:flex hidden flex-wrap">
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
        <QuestPrintout
          quests={{
            static: staticQuests.split("\n"),
            random: randomQuests.split("\n"),
            numberOfRandomQuests,
          }}
        />
      </div>
    </div>
  );
}
