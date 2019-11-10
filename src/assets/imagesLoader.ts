const lazyLoadImage = (imageName: string, img: HTMLImageElement) => {
  import(
      /* webpackMode: "lazy-once" */
      `./images/${imageName}`
  )
      .then((src) => (img.src = src.default))
      .catch((err) => console.error(err));
};

const generateImage = (imageName: string) => {
  const img = new Image();
  lazyLoadImage(imageName, img);
};

const getImagesNames = () => {
  const r = (require as any).context("./images", true, /\.(png|svg|jpg)$/);

  const importAll = (r: any) => r.keys().map((file: string) => file.slice(2));

  return importAll(r);
};

const imagesNames = getImagesNames();

export default () => imagesNames.forEach((name: string) => generateImage(name));
