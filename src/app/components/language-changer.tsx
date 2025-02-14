"use client";

import { useCallback } from "react";

export const LanguageChanger: React.FC = () => {
  const currentLocale = "NL";
  const handleChange = useCallback(() => {}, []);

  return (
    <button type="button" onClick={() => handleChange()} className="text-white">
      {currentLocale.toUpperCase()}
    </button>
  );
};
