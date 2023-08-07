export interface IdialogProps {
  isShow: boolean;
  onHanndleShow: () => void;
  title: string;
  grayButtonName: string;
  onClickGrayButton: () => void;
  description?: string;
  primaryButtonName?: string;
  onClickPrimaryButton?: () => void;
}
