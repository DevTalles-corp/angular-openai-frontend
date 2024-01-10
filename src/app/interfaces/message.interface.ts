

export interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  },
  audioUrl?: string;
  imageInfo?: {
    url: string;
    alt: string;
  }
}
