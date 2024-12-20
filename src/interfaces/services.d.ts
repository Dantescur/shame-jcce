export interface Service {
  image: ImageMetadata;
  title: string;
  subtitle: string;
  lowsubtitle: string;
  link: string;
  load: "eager" | "lazy" | null | undefined;
}
