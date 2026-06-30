"use client";

import { supportStyles } from "./SupportPageContent.styles";

const countries = [
  { code: "+994", flag: "🇦🇿", label: "Azerbaijan" },
  { code: "+48", flag: "🇵🇱", label: "Poland" },
  { code: "+90", flag: "🇹🇷", label: "Turkey" },
  { code: "+1", flag: "🇺🇸", label: "United States" },
  { code: "+44", flag: "🇬🇧", label: "United Kingdom" },
];

type PhoneInputProps = {
  countryCode: string;
  phoneNumber: string;
  onCountryChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
};

export default function PhoneInput({
  countryCode,
  phoneNumber,
  onCountryChange,
  onPhoneChange,
}: PhoneInputProps) {
  return (
    <div className="flex gap-3">
      <select
        value={countryCode}
        onChange={(event) => onCountryChange(event.target.value)}
        className="h-12 w-26.25 rounded-xl border border-white/10 bg-black/25 px-3 text-sm text-white outline-none focus:border-[#00A86B]/70"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>

      <input
        value={phoneNumber}
        onChange={(event) => onPhoneChange(event.target.value)}
        placeholder="Phone number"
        className={supportStyles.input}
      />
    </div>
  );
}