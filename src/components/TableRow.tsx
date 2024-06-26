import { SentenceItem } from "@/types/types";
import Icon from "@mui/material/Icon";

export default function TableRow(props: {
  nativeSentences: SentenceItem[];
  sentences: SentenceItem[][];
  index: number;
}) {
  const { nativeSentences, sentences, index } = props;
  return (
    <tr>
      <th className="sticky z-1 left-0 dark:bg-[#424242] bg-[#fafafa]">
        <TableFirstItem>{nativeSentences[index].sentence}</TableFirstItem>
      </th>
      {sentences.map((sentence, itemIndex) => {
        return (
          <td key={itemIndex}>
            <TableItem>
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
    <div className="text-sm md:text-lg w-36 md:w-44 lg:w-60 flex flex-col justify-center items-center  bg-neutral-50 dark:bg-[#424242] p-2 my-4 mx-2">
      {children}
    </div>
  );
}

function TableItem({ children }: any) {
  return (
    <div className="w-44 md:w-60 lg:w-72 flex flex-col justify-center items-center bg-neutral-50 dark:bg-[#424242] p-2 my-4 mx-2 rounded-lg shadow-md hover:shadow-lg">
      {children}
    </div>
  );
}

function WordItem(props: { word: SentenceItem }) {
  const { word } = props;
  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <div className=" font-semibold placeholder:text-sm md:text-lg">
        {word.sentence}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="italic">{`[${word.phonetic}]`}</div>
        <div
          className="flex items-center"
          onClick={() => {
            let audio = document.getElementById(
              `/${word.language}/${word.id}_${word.name}.mp3`
            );
            (audio as HTMLAudioElement)?.play();
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
