import { getTranslations } from "@/lib/i18n";
import { en } from "@/lib/i18n/locales/en";
import { pt } from "@/lib/i18n/locales/pt";

describe("i18n", () => {
  it("returns english translations for 'en'", () => {
    expect(getTranslations("en")).toEqual(en);
  });

  it("returns portuguese translations for 'pt'", () => {
    expect(getTranslations("pt")).toEqual(pt);
  });

  it("pt and en have the same translation keys", () => {
    const enKeys = JSON.stringify(en, (_, v) =>
      typeof v === "string" ? "" : v
    );
    const ptKeys = JSON.stringify(pt, (_, v) =>
      typeof v === "string" ? "" : v
    );
    expect(enKeys).toEqual(ptKeys);
  });
});
