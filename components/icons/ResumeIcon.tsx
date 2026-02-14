interface IconProps {
  size?: number;
  className?: string;
}

export default function ResumeIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      <path d="M8 12h8v2H8zM8 16h5v2H8z" />
    </svg>
  );
}
