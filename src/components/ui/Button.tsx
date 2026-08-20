import React from 'react';

type ButtonVariant = 'primary' | 'secondary-whatsapp';

type CommonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
  as?: 'button';
};

type ButtonAsLink = CommonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
  as: 'a';
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = 'primary', children, className = '', as = 'button', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold px-6 py-3 transition-all duration-150 rounded";
  
  const variants = {
    'primary': "bg-ambar text-carvao hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(200,154,84,0.3)]",
    'secondary-whatsapp': "border-2 border-ambar text-carvao bg-transparent hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(200,154,84,0.3)]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
  const whatsappIcon = variant === 'secondary-whatsapp' && (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.02L.016 24l6.104-1.6c1.761.968 3.743 1.48 5.911 1.48 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.896 17.135c-.198.558-1.156 1.055-1.594 1.13-.438.075-.99.11-2.906-.688-2.328-.97-3.823-3.32-3.953-3.495-.13-.175-.943-1.258-.943-2.4 0-1.142.593-1.7.8-1.928.208-.228.455-.285.605-.285.15 0 .3.003.433.005.138.003.32-.053.5.38.188.452.64 1.563.698 1.678.058.115.098.248.023.398-.075.15-.113.245-.225.378-.113.132-.24.288-.34.385-.115.11-.235.233-.105.455.13.222.58 1.018 1.305 1.663.935.83 1.66 1.05 1.88 1.165.22.115.35.095.48-.055.13-.15.56-.653.71-.878.15-.225.3-.188.5-.113.2.075 1.265.598 1.48.705.215.108.36.163.413.253.053.09.053.52-.145 1.078z"/>
    </svg>
  );

  if (as === 'a') {
    return (
      <a className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {whatsappIcon}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {whatsappIcon}
      {children}
    </button>
  );
}
