import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food Restaurant App" },
    { name: "description", content: "Food App" },
  ];
}

export default function Home() {
  return <Welcome />;
}
