import React, { use } from "react";
import TableRow from "./TableRow";
import { useLanguageOption } from "@/hooks/useLanguageOption";
import { SentenceItem } from "@/types/types";
import { enSentences } from "@/data/en";
import { zhSentences } from "@/data/zh";
import { getSentences } from "@/data/languages";

export default function TableRows() {
  let sentences: SentenceItem[][] = [];
  const languages: string[] = useLanguageOption(
    (state) => state.learningLanguages
  );
  const nativeLanguage = useLanguageOption((state) => state.nativeLanguage);
  languages.map((language) => {
    console.log("Selected Languages:" + language);
    sentences.push(getSentences(language));
  });
  const native = nativeLanguage || "en";
  const nativeSentences = getSentences(native);

  return nativeSentences.map((sentence, index) => {
    return (
      <TableRow
        nativeSentences={nativeSentences}
        sentences={sentences}
        index={index}
        key={index}
      />
    );
  });

  //   return <TableRow nativeSentences={nativeSentences} sentences={sentences} />;
}
