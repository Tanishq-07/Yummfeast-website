import { clsx } from 'clsx';

interface CustomButtonProps {
  value: string;
  className?: string;
}

export default function CustomButton({ value, className }: CustomButtonProps) {
  return (
    <div className="transition-transform duration-100 hover:scale-[1.1]">
    <div
      className={clsx(
        "text-white text-lg font-medium px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-red-600",
        className
      )}
    >
      {value}
      <div className="absolute -bottom-1 left-0 w-full h-full rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
    </div>
    </div>
  );
}
