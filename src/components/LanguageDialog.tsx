import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useLanguageOption } from "@/hooks/useLanguageOption";
import { Language, getFlag } from "@/data/languages";
import { useTranslations } from "next-intl";
import Icon from "@mui/material/Icon";

export default function LanguageDialog(props: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (value: string) => {
    console.log("Selected Language: " + value);
    languageOption.setLearningLanguages([
      ...languageOption.learningLanguages,
      value,
    ]);
    setOpen(false);
  };

  const languageOption = useLanguageOption();
  const unSelectedLanguages = Object.values(Language).filter(
    (language) => !languageOption.learningLanguages.includes(language) && language !== languageOption.nativeLanguage
  );
  const t = useTranslations();

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {unSelectedLanguages.map((lang) => (
          <ListItem disableGutters key={lang}>
            <ListItemButton onClick={() => handleListItemClick(lang)}>
              <ListItemText primary={`${getFlag(lang)} ${t(lang)}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
