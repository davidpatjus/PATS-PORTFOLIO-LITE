interface Props {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeading = ({ label, title, subtitle, dark = false }: Props) => {
  return (
    <div className="text-center mb-12">
      <p className="text-base text-red-500 font-semibold tracking-wide uppercase">{label}</p>
      <h2 className={`mt-2 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-3xl text-lg mx-auto ${dark ? "text-white/75" : "text-gray-600"}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
