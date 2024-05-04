import { SentenceItem } from "@/types/types";
import Icon from "@mui/material/Icon";

export default function TableRow(props: {
  nativeSentences: SentenceItem[];
  sentences: SentenceItem[][];
  index: number;
}) {
  const { nativeSentences, sentences, index } = props;
  console.log("Native Sentences:" + nativeSentences);
  console.log("Sentences:" + sentences);
  return (
    <tr>
      <th className="sticky z-1 left-0">
        <TableFirstItem>{nativeSentences[index].sentence}</TableFirstItem>
      </th>
      {sentences.map((sentence, itemIndex) => {
        return (
          <td>
            <TableItem key={itemIndex}>
              <WordItem word={sentence[index]} />
            </TableItem>
          </td>
        );
      })}
    </tr>
  );
}
function TableFirstItem({ children }: any) {
  return (
    <div className="text-sm md:text-lg w-36 md:w-44 lg:w-60 flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-700 p-2 my-4 mx-2">
      {children}
    </div>
  );
}

function TableItem({ children }: any) {
  return (
    <div className="w-36 md:w-44 lg:w-60 flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-700 p-2 my-4 mx-2 rounded-lg shadow-md hover:shadow-lg">
      {children}
    </div>
  );
}

function WordItem(props: { word: SentenceItem }) {
  const { word } = props;
  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <div className="text-sm md:text-lg">{word.sentence}</div>
      <div className="flex gap-2 justify-center items-center">
        <div>{`[${word.phonetic}]`}</div>
        <div
        className="flex items-center"
          onClick={() => {
            const audio = document.getElementById(
              `/${word.language}/${word.id}_${word.name}.mp3`
            );
            audio?.play();
          }}
        >
          <Icon style={{ fontSize: 20 }}>volume_up</Icon>
          <audio hidden id={`/${word.language}/${word.id}_${word.name}.mp3`}>
            <source
              src={`/${word.language}/${word.id}_${word.name}.mp3`}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
