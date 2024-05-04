import { SentenceItem } from "@/types/types";

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
        <TableHeaderItem>{nativeSentences[index].sentence}</TableHeaderItem>
      </th>
      {sentences.map((sentence, itemIndex) => {
        return (
          <td>
            <TableHeaderItem key={itemIndex}>{sentence[index].sentence}</TableHeaderItem>
          </td>
        );
      })}
    </tr>
  );
}

function TableHeaderItem({ children }: any) {
  return (
    <div className="w-64 h-56 flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-700">
      {children}
    </div>
  );
}
