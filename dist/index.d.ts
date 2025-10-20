import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "destructive" | "validate" | "outline" | "outline-primary" | "outline-secondary" | "outline-validate" | "outline-destructive" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
}
declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "info" | "warning" | "error" | "success" | "help";
    title?: string;
    icon?: React.ReactNode;
    showIcon?: boolean;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "default" | "muted" | "subtle";
    external?: boolean;
    showExternalIcon?: boolean;
    underline?: "always" | "hover" | "never";
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLInputElement>>;

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    highlightLines?: number[];
}
declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLDivElement>>;

interface CodeEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    language?: "yaml" | "javascript" | "typescript" | "json" | "python";
    placeholder?: string;
    readOnly?: boolean;
    height?: string;
    className?: string;
}
declare const CodeEditor: React.ForwardRefExoticComponent<CodeEditorProps & React.RefAttributes<HTMLDivElement>>;

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    icon?: React.ReactNode;
}
declare const Collapsible: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDivElement>>;

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
}
/**
 * Wrapper component for react-icons (Ionicons 5) to ensure consistent styling
 *
 * Usage:
 * import { IoCheckmarkCircle } from "@/components/ui/icon"
 * <IoCheckmarkCircle className="h-5 w-5 text-primary" />
 *
 * All Ionicons are available - just import from this file
 */
declare const Icon: React.ForwardRefExoticComponent<IconProps & {
    as: React.ComponentType<any>;
} & React.RefAttributes<SVGElement>>;

type ToastType = "success" | "error" | "info";
interface ToastProps {
    message: string;
    type: ToastType;
    duration?: number;
    onClose: () => void;
    index?: number;
}
declare function Toast({ message, type, duration, onClose, index }: ToastProps): react_jsx_runtime.JSX.Element;
interface ToastContainerProps {
    toasts: Array<{
        id: string;
        message: string;
        type: ToastType;
    }>;
    removeToast: (id: string) => void;
}
declare function ToastContainer({ toasts, removeToast }: ToastContainerProps): react_jsx_runtime.JSX.Element;

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative" | "neutral";
    icon?: React.ReactNode;
}
declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    size?: "sm" | "md" | "lg";
    color?: "primary" | "success" | "warning" | "error";
}
declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string | number;
    subtitle?: string;
    collapsible?: boolean;
    defaultOpen?: boolean;
}
declare const MetricCard: React.ForwardRefExoticComponent<MetricCardProps & React.RefAttributes<HTMLDivElement>>;

type ResultStatus = "success" | "error" | "warning" | "info" | "idle";
interface ResultsPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "results"> {
    title?: string;
    status?: ResultStatus;
    results?: Array<{
        type: ResultStatus;
        message: string;
        details?: string;
    }>;
    emptyMessage?: string;
}
declare const ResultsPanel: React.ForwardRefExoticComponent<ResultsPanelProps & React.RefAttributes<HTMLDivElement>>;

interface RenderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "mark" | "full";
    height?: number;
}
declare const RenderLogo: React.ForwardRefExoticComponent<RenderLogoProps & React.RefAttributes<HTMLDivElement>>;

interface GridDecorationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    /**
     * Position of the grid decoration
     */
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
    /**
     * Orientation of the staircase pattern
     */
    orientation?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    /**
     * Width in pixels or CSS value
     */
    width?: number | string;
    /**
     * Height in pixels or CSS value
     */
    height?: number | string;
    /**
     * Opacity of the grid (0-1)
     */
    opacity?: number;
    /**
     * Density of squares (0-1, where 1 is all squares present)
     */
    density?: number;
}
declare const GridDecoration: React.ForwardRefExoticComponent<GridDecorationProps & React.RefAttributes<HTMLDivElement>>;

declare const SaveButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const SaveDraftButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const SaveAndDeployButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const EditButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DuplicateButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DeleteButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const CreateButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const AddButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const UploadButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DownloadButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DeployButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const RestartButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const PauseButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const StopButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const ContinueButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const BackButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const NextButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    copyright?: string;
    links?: Array<{
        label: string;
        href: string;
    }>;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    links?: {
        label: string;
        href: string;
    }[];
    actions?: React.ReactNode;
}
declare const Navigation: React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLElement>>;

interface HeroMinimalProps extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}
declare const HeroMinimal: React.ForwardRefExoticComponent<HeroMinimalProps & React.RefAttributes<HTMLElement>>;

interface EditorLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "results"> {
    title?: string;
    description?: string;
    editor?: React.ReactNode;
    results?: React.ReactNode;
    actions?: React.ReactNode;
    links?: Array<{
        label: string;
        href: string;
    }>;
}
declare const EditorLayout: React.ForwardRefExoticComponent<EditorLayoutProps & React.RefAttributes<HTMLDivElement>>;

interface MDXContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
/**
 * Container for MDX content with Render-styled typography
 * Use with @tailwindcss/typography for rich text formatting
 */
declare const MDXContent: React.ForwardRefExoticComponent<MDXContentProps & React.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { AddButton, Alert, type AlertProps, BackButton, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, CodeBlock, type CodeBlockProps, CodeEditor, type CodeEditorProps, Collapsible, type CollapsibleProps, ContinueButton, CreateButton, DeleteButton, DeployButton, DownloadButton, DuplicateButton, EditButton, EditorLayout, type EditorLayoutProps, Footer, type FooterProps, FormField, type FormFieldProps, GridDecoration, type GridDecorationProps, HeroMinimal, type HeroMinimalProps, Icon, Input, type InputProps, Label, type LabelProps, Link, type LinkProps, MDXContent, type MDXContentProps, MetricCard, type MetricCardProps, Navigation, type NavigationProps, NextButton, PauseButton, ProgressBar, type ProgressBarProps, RenderLogo, type RenderLogoProps, RestartButton, type ResultStatus, ResultsPanel, type ResultsPanelProps, SaveAndDeployButton, SaveButton, SaveDraftButton, StatCard, type StatCardProps, StopButton, Tabs, TabsContent, TabsList, TabsTrigger, Toast, ToastContainer, type ToastProps, type ToastType, UploadButton, cn };
