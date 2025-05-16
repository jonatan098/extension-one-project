export interface ImageSelectorProps {
  onChange: (imageFile: File) => void;
  label: string;
  width: string;
  height: string;
  image?: string;
  permittedFileExtensions: string[];
  error?: string;
}
