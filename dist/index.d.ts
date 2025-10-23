import * as React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
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

interface Suggestion {
    /**
     * Unique value for the suggestion
     */
    value: string;
    /**
     * Display label for the suggestion
     */
    label: string;
}
interface InputWithSuggestionsProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "onSelect"> {
    /**
     * Array of suggestion items
     */
    suggestions?: Suggestion[];
    /**
     * Callback when input value changes
     */
    onChange?: (value: string) => void;
    /**
     * Callback when a suggestion is selected
     */
    onSelect?: (suggestion: Suggestion) => void;
    /**
     * Maximum height of the dropdown
     * @default "300px"
     */
    dropdownMaxHeight?: string;
}
declare const InputWithSuggestions: React.ForwardRefExoticComponent<InputWithSuggestionsProps & React.RefAttributes<HTMLInputElement>>;

declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

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

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Size of the spinner
     * @default "default"
     */
    size?: "xs" | "sm" | "default" | "lg" | "xl";
    /**
     * Color variant of the spinner
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "white" | "foreground";
    /**
     * Show with a label
     */
    label?: string;
    /**
     * Show Render mark inside the spinner
     * @default true
     */
    showMark?: boolean;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;

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
     * Density of squares (0-1, where higher values show more squares)
     */
    density?: number;
}
declare const GridDecoration: React.ForwardRefExoticComponent<GridDecorationProps & React.RefAttributes<HTMLDivElement>>;

interface ThemeToggleProps {
    /**
     * Custom className for the toggle button
     */
    className?: string;
    /**
     * Size variant of the toggle button
     * @default "default"
     */
    size?: "sm" | "default" | "lg";
    /**
     * Style variant of the toggle button
     * @default "outline"
     */
    variant?: "outline" | "ghost" | "solid";
    /**
     * Show labels next to icons
     * @default false
     */
    showLabel?: boolean;
}
declare const ThemeToggle: React.ForwardRefExoticComponent<ThemeToggleProps & React.RefAttributes<HTMLButtonElement>>;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Visual variant of the container
     * @default "default"
     */
    variant?: "default" | "bordered" | "elevated" | "ghost" | "frosted";
    /**
     * Padding size
     * @default "default"
     */
    padding?: "none" | "sm" | "default" | "lg";
    /**
     * Whether the container spans the full width
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Center the content horizontally
     * @default false
     */
    centered?: boolean;
    /**
     * Use transparent background (shortcut for variant="ghost")
     * @default false
     */
    transparent?: boolean;
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Visual variant of the card
     * @default "default"
     */
    variant?: "default" | "outlined" | "elevated" | "frosted";
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

type Theme = "light" | "dark";
interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}
interface ThemeProviderProps {
    /**
     * The children to render
     */
    children: React.ReactNode;
    /**
     * Default theme to use
     * @default "light"
     */
    defaultTheme?: Theme;
    /**
     * Storage key for localStorage
     * @default "theme"
     */
    storageKey?: string;
    /**
     * Enable system preference detection
     * @default true
     */
    enableSystem?: boolean;
}
declare function ThemeProvider({ children, defaultTheme, storageKey, enableSystem, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * ThemeScript - Prevents flash of unstyled content (FOUC) when using dark mode
 *
 * This component MUST be placed in the <head> to run before React hydrates.
 * It applies the correct theme class immediately on page load.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeScript, ThemeProvider } from "render-dds"
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning className="bg-background text-foreground">
 *       <head>
 *         <ThemeScript />
 *       </head>
 *       <body>
 *         <ThemeProvider defaultTheme="light" enableSystem>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
declare function ThemeScript({ storageKey }: {
    storageKey?: string;
}): react_jsx_runtime.JSX.Element;

declare function useTheme(): ThemeContextValue;

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
    /**
     * Custom copyright text
     */
    copyright?: string;
    /**
     * Array of footer links
     */
    links?: Array<{
        label: string;
        href: string;
    }>;
    /**
     * Make the footer sticky at the bottom of the viewport
     * @default false
     */
    sticky?: boolean;
    /**
     * Center the copyright text (and stack links below if present)
     * @default false
     */
    centered?: boolean;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;

interface NavigationLink {
    /**
     * Text label for the link
     */
    label: string;
    /**
     * URL or path for the link
     */
    href: string;
    /**
     * Optional icon to display before the label
     */
    icon?: React.ReactNode;
    /**
     * Whether this link is active (current page)
     * @default false
     */
    active?: boolean;
}
interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Logo or brand element displayed on the left
     */
    logo?: React.ReactNode;
    /**
     * Array of navigation links
     */
    links?: NavigationLink[];
    /**
     * Action buttons or elements displayed on the right (e.g., theme toggle, login button)
     */
    actions?: React.ReactNode;
    /**
     * Position of the links in the navigation
     * @default "left"
     */
    linksPosition?: "left" | "center" | "right";
    /**
     * Make the navigation sticky at the top of the viewport
     * @default false
     */
    sticky?: boolean;
    /**
     * Current pathname to automatically determine active links (e.g., from usePathname())
     * When provided, links are automatically marked as active if their href matches this path
     */
    currentPath?: string;
    /**
     * Apply frosted glass effect (backdrop blur with semi-transparent background)
     * @default false
     */
    frosted?: boolean;
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

export { AddButton, Alert, type AlertProps, BackButton, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, CodeBlock, type CodeBlockProps, CodeEditor, type CodeEditorProps, Collapsible, type CollapsibleProps, Container, type ContainerProps, ContinueButton, CreateButton, DeleteButton, DeployButton, DownloadButton, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DuplicateButton, EditButton, EditorLayout, type EditorLayoutProps, Footer, type FooterProps, FormField, type FormFieldProps, GridDecoration, type GridDecorationProps, HeroMinimal, type HeroMinimalProps, Icon, Input, type InputProps, InputWithSuggestions, type InputWithSuggestionsProps, Label, type LabelProps, Link, type LinkProps, MDXContent, type MDXContentProps, MetricCard, type MetricCardProps, Navigation, type NavigationLink, type NavigationProps, NextButton, PauseButton, ProgressBar, type ProgressBarProps, RenderLogo, type RenderLogoProps, RestartButton, type ResultStatus, ResultsPanel, type ResultsPanelProps, SaveAndDeployButton, SaveButton, SaveDraftButton, Spinner, type SpinnerProps, StatCard, type StatCardProps, StopButton, type Suggestion, Tabs, TabsContent, TabsList, TabsTrigger, type Theme, ThemeProvider, type ThemeProviderProps, ThemeScript, ThemeToggle, type ThemeToggleProps, Toast, ToastContainer, type ToastProps, type ToastType, UploadButton, cn, useTheme };
