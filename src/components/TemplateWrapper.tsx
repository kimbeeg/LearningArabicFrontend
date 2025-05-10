import React from 'react';
import { TemplateConfig } from '../App';

interface TemplateWrapperProps {
  config: TemplateConfig;
  children: React.ReactNode;
}

export function TemplateWrapper({ config, children }: TemplateWrapperProps) {
  return (
    <div 
      className="template-wrapper"
      style={{
        '--color-primary': config.primaryColor || '255 159 28',
        '--color-secondary': config.secondaryColor || '106 76 219',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}