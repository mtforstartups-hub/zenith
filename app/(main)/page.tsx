// PREVIOUS CODE
/*

import type { Metadata } from "next";
import Home from "@/pages/Home";


export const metadata: Metadata = {
  title: "Project Zenith — Platform for Global Startup Ecosystem",
  description:
    "A structured platform where startups showcase traction, investors discover credible opportunities, and the global ecosystem collaborates to accelerate innovation.",
};

export default function Page() {
    return <Home />;
}

*/

/*
SUGGESTIONS

1. Don't add metadata now
2. Don't create Components like <Home /> . Components are reusable pieces of code, only create when you want to reuse.
3. Don't use Layout as a separate component. We already have a layout file

*/

export default function HomePage() {
  return <div>HomePage</div>;
}
