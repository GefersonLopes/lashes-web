"use client";

import Initial from "./pages/initial.page";
import LashesPage from "./pages/lashes.page";
import PromoPage from "./pages/promo.page";

export default function Home() {
  return (
    <div>
      <Initial />
      <LashesPage />
      <PromoPage />
    </div>
  );
}
