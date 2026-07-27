import { PageData } from "./websiteData";

export function MenuItem(props: { item: PageData; index: number }) {
  const { item } = props;
  return (
    <li>
      <a href={item.path}>{item.title}</a>
    </li>
  );
}
