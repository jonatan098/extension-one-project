export interface StepProps {
  steps: {
    title: string;
    status: "pending" | "completed";
  }[];
  isVertical?: boolean;
}
