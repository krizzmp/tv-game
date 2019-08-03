interface PresentationAvailability {
  onchange: () => void | undefined;
  value: boolean;
}
declare class PresentationRequest {
  constructor(url: string);

  apiBaseUrl: string;

  getAvailability(): Promise<PresentationAvailability>;
  start(): void;
}
