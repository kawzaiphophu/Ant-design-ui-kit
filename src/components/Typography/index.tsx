/**
 * Typography Component
 * 
 * A comprehensive typography component with multiple variants for headings, paragraphs, labels, and links.
 * Supports ellipsis, copyable text, and custom styling.
 * 
 * @example
 * // Display heading
 * <Typography variant="h1">Main Heading</Typography>
 * 
 * @example
 * // Paragraph with ellipsis
 * <Typography 
 *   variant="paragraph-medium"
 *   ellipsis={true}
 *   ellipsisOptions={{ rows: 2, expandable: true }}
 * >
 *   Long paragraph text that will be truncated...
 * </Typography>
 * 
 * @example
 * // Link variant
 * <Typography 
 *   variant="link-big"
 *   href="https://example.com"
 *   target="_blank"
 * >
 *   Visit Website
 * </Typography>
 * 
 * @example
 * // Page title with custom styling
 * <Typography 
 *   variant="page-title"
 *   className="text-center"
 *   style={{ color: '#1890ff' }}
 * >
 *   Dashboard
 * </Typography>
 */
'use client';

import { Typography as AntTypography } from 'antd';
import React, { useState } from 'react';
import './typography.css';

const { Text, Title, Paragraph } = AntTypography;

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'display-1'
  | 'display-2'
  | 'display-3'
  | 'display-4'
  | 'display-5'
  | 'display-6'
  | 'page-title'
  | 'paragraph-big'
  | 'paragraph-big-regular'
  | 'paragraph-big-medium'
  | 'paragraph-big-semibold'
  | 'paragraph-big-strikethrough'
  | 'paragraph-medium'
  | 'paragraph-middle-regular'
  | 'paragraph-middle-medium'
  | 'paragraph-middle-semibold'
  | 'paragraph-middle-strikethrough'
  | 'paragraph-small'
  | 'paragraph-small-regular'
  | 'paragraph-small-medium'
  | 'paragraph-small-semibold'
  | 'paragraph-small-strikethrough'
  | 'paragraph-extra-small'
  | 'paragraph-extra-small-regular'
  | 'paragraph-extra-small-medium'
  | 'paragraph-extra-small-semibold'
  | 'paragraph-extra-small-strikethrough'
  | 'subtitle'
  | 'label-selection'
  | 'label-list'
  | 'label-input-small'
  | 'label-input-middle'
  | 'clickable-label'
  | 'value-list'
  | 'placeholder'
  | 'button-big'
  | 'button-middle'
  | 'button-small'
  | 'link-big'
  | 'link-middle'
  | 'link-small'
  | 'all-cap'
  | 'error';

export interface CustomTypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  ellipsis?: boolean;
  ellipsisOptions?: {
    rows?: number;
    expandable?: boolean | 'collapsible';
    symbolNotExpanded?: string;
    symbolExpanded?: string;
  };
  copyable?: boolean;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  variant,
  children,
  style,
  href,
  target,
  onClick,
  className,
  ellipsis,
  ellipsisOptions = {},
  copyable = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const getElement = () => {
    if (
      variant === 'h1' ||
      variant === 'display-1' ||
      variant === 'page-title'
    ) {
      return (
        <Title
          level={1}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
        >
          {children}
        </Title>
      );
    }
    if (variant === 'h2' || variant === 'display-2') {
      return (
        <Title
          level={2}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
        >
          {children}
        </Title>
      );
    }
    if (variant === 'h3' || variant === 'display-3') {
      return (
        <Title
          level={3}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
        >
          {children}
        </Title>
      );
    }
    if (variant === 'h4' || variant === 'display-4') {
      return (
        <Title
          level={4}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
          copyable={
            copyable
              ? {
                  // tooltips: false,
                  icon: [
                    <i className="ri-checkbox-multiple-blank-line text-base !text-icon-quinary"></i>,
                    <i className="ri-checkbox-circle-line text-base !text-icon-quinary"></i>,
                  ],
                }
              : false
          }
        >
          {children}
        </Title>
      );
    }
    if (variant === 'h5' || variant === 'display-5') {
      return (
        <Title
          level={5}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
        >
          {children}
        </Title>
      );
    }
    if (variant === 'h6' || variant === 'display-6') {
      return (
        <Title
          level={5}
          className={`${className} typography-${variant}`}
          style={style}
          title={children as string}
        >
          {children}
        </Title>
      );
    }

    if (variant.startsWith('paragraph-')) {
      return (
        <Paragraph
          className={`${className} typography-${variant}`}
          style={style}
          onClick={onClick}
          title={children as string}
          ellipsis={
            ellipsis
              ? {
                  rows: ellipsisOptions.rows || 1,
                  expandable: ellipsisOptions.expandable,
                  symbol: expanded
                    ? ellipsisOptions.symbolExpanded
                    : ellipsisOptions.symbolNotExpanded,
                  onExpand: (_, info) => setExpanded(info.expanded),
                }
              : false
          }
        >
          {children}
        </Paragraph>
      );
    }

    if (variant.startsWith('link-')) {
      return (
        <Text
          className={`${className} typography-${variant}`}
          style={style}
          onClick={onClick}
          title={children as string}
        >
          {href ? (
            <a href={href} target={target}>
              {children}
            </a>
          ) : (
            children
          )}
        </Text>
      );
    }

    return (
      <Text
        className={`${className} typography-${variant}`}
        style={style}
        onClick={onClick}
        title={children as string}
      >
        {href ? (
          <a href={href} target={target}>
            {children}
          </a>
        ) : (
          children
        )}
      </Text>
    );
  };

  return getElement();
};

export default CustomTypography;
