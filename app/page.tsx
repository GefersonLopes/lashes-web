"use client";

import ClientBenefitsPage from "./pages/clientBenefits.page";
import Initial from "./pages/initial.page";
import LashesPage from "./pages/lashes.page";
import PromoPage from "./pages/promo.page";

export default function Home() {
  return (
    <>
      <Initial />
      <LashesPage />
      <PromoPage />
      <ClientBenefitsPage />
    </>
  );
}
