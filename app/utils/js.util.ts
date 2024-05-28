export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const captialCase = (str: string) => {
  if (!str) return "";
  const words = str.split("_");
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(" ");
};

export const waiverStyling: any = {
  h1: {
    component: "h1",
    props: {
      className: "text-xl md:text-2xl my-2 text-center font-semibold",
    },
  },
  h2: {
    component: "h2",
    props: {
      className: "text-lg my-1 font-semibold",
    },
  },
  ol: {
    component: "ol",
    props: {
      className: "list-decimal list-outside",
    },
  },
  li: {
    component: "li",
    props: {
      className: "mb-3 ml-10",
    },
  },
};
