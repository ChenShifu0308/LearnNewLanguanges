"use client";
import { selectOptions } from "@/data/languages";
import { useLanguageOption } from "@/hooks/useLanguageOption";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Select from "react-select";

/* After the native language is selected. the whole app language would be changed. */
export default function NativeLanguageSelect() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  console.log("current locale:" + locale);
  useLanguageOption.setState({ nativeLanguage: locale });

  const onSelectChange = (selectedLocale) => {
    console.log("selected locale:" + selectedLocale);
    console.log("pathname:" + pathname);
    useLanguageOption.setState({ nativeLanguage: selectedLocale });
    const previousLearningLanguages = useLanguageOption.getState().learningLanguages
    useLanguageOption.setState({
      learningLanguages: previousLearningLanguages.filter(
        (lang) => lang !== selectedLocale
      ),
    });

    startTransition(() => {
      router.replace(pathname.replace(locale, selectedLocale));
    });
  };

  return (
    <div>
      <Select
        styles={{
          singleValue: (provided) => ({
            ...provided,
            color: resolvedTheme == "dark" ? "#fafafa" : "#424242",
          }),
          control: (provided) => ({
            ...provided,
            // color: resolvedTheme == "dark" ? "#fafafa" : "#424242",
            backgroundColor: resolvedTheme == "dark" ? "#424242" : "#fafafa",
          }),
          menuList: (provided) => ({
            ...provided,
            color: resolvedTheme == "dark" ? "#fafafa" : "#424242",
            backgroundColor: resolvedTheme == "dark" ? "#424242" : "#fafafa",
          }),
        }}
        defaultValue={selectOptions.find((option) => option.value === locale)}
        onChange={(option) => {
          onSelectChange(option.value);
        }}
        options={selectOptions}
      />
    </div>
  );
}
