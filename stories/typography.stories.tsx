import type { Story } from "@ladle/react"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const typographyProps = [
  {
    name: "className",
    type: "string",
    description:
      "prose, prose-sm, prose-lg, prose-xl for sizes; prose-zinc for color scheme; dark:prose-invert for dark mode",
  },
]

export const Prose: Story = () => (
  <StoryWithCode
    title="Typography - Prose"
    description="Tailwind typography prose classes for rich text content. Automatically styles headings, paragraphs, lists, code blocks, quotes, and links."
    props={typographyProps}
  >
    <div className="p-8 max-w-4xl">
      <article className="prose prose-zinc dark:prose-invert lg:prose-lg">
        <h1>Typography Demo</h1>
        <p className="lead">
          This is a demonstration of Tailwind's typography plugin with the DDS design system. The
          prose classes automatically style your content with beautiful typography.
        </p>

        <h2>Headings</h2>
        <p>
          You can use different heading levels to create a visual hierarchy in your content. Each
          heading is automatically styled with appropriate font sizes and spacing.
        </p>

        <h3>Code Examples</h3>
        <p>
          Inline code looks like <code>const example = "Hello World"</code> and integrates
          seamlessly with your text. For larger code blocks:
        </p>

        <pre>
          <code>{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("DDS");
console.log(message);`}</code>
        </pre>

        <h2>Lists</h2>
        <p>Typography handles both ordered and unordered lists beautifully:</p>

        <ul>
          <li>Unordered list item one</li>
          <li>Unordered list item two</li>
          <li>
            Nested lists work too:
            <ul>
              <li>Nested item one</li>
              <li>Nested item two</li>
            </ul>
          </li>
        </ul>

        <ol>
          <li>Ordered list item one</li>
          <li>Ordered list item two</li>
          <li>Ordered list item three</li>
        </ol>

        <h2>Quotes and Emphasis</h2>
        <blockquote>
          <p>
            Blockquotes are styled to stand out from regular content. They're perfect for
            highlighting important information or quoting external sources.
          </p>
        </blockquote>

        <p>
          You can use <strong>bold text</strong> and <em>italic text</em> for emphasis. Combined
          with other elements, they help create rich, expressive content.
        </p>

        <h2>Links and Images</h2>
        <p>
          Links are automatically styled with appropriate colors and hover states. Here's an{" "}
          <a href="#">example link</a> to demonstrate.
        </p>

        <h2>Horizontal Rules</h2>
        <p>Use horizontal rules to separate sections:</p>
        <hr />
        <p>Content continues after the separator.</p>
      </article>
    </div>
  </StoryWithCode>
)

export const Headings: Story = () => (
  <StoryWithCode
    title="Typography - Headings"
    description="Standard heading styles from H1 to H6 with Tailwind utility classes. Shows recommended sizes and weights for each level."
    props={typographyProps}
  >
    <div className="p-8 space-y-12 bg-white dark:bg-zinc-950">
      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Heading 1 - Main Title
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H1 for page titles and main headings. Should only appear once per page.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-5xl font-bold
        </code>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h2 className="text-4xl font-semibold text-zinc-900 dark:text-white mb-5">
          Heading 2 - Section Title
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H2 for major section headings. These divide your content into main topics.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-4xl font-semibold
        </code>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-4">
          Heading 3 - Subsection
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H3 for subsections under H2. Great for breaking down complex topics.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-3xl font-semibold
        </code>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h4 className="text-2xl font-medium text-zinc-900 dark:text-white mb-3">
          Heading 4 - Minor Section
        </h4>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H4 for smaller subdivisions. Good for detailed documentation.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-2xl font-medium
        </code>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h5 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">
          Heading 5 - Small Heading
        </h5>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H5 for even smaller sections or list titles.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-xl font-medium
        </code>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-8">
        <h6 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
          Heading 6 - Smallest Heading
        </h6>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use H6 sparingly. Often used for card titles or small labels.
        </p>
        <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-400">
          text-lg font-medium
        </code>
      </div>
    </div>
  </StoryWithCode>
)

export const HeadingsWithColor: Story = () => (
  <StoryWithCode
    title="Typography - Colored Headings"
    description="Heading styles with brand colors: purple for branding, teal for success/validation, and neutral gray for standard content."
    props={typographyProps}
  >
    <div className="p-8 space-y-12 bg-white dark:bg-zinc-950">
      <div className="border border-purple-500 bg-purple-50 dark:bg-zinc-900 p-8">
        <h1 className="text-5xl font-bold text-purple-700 dark:text-purple-400 mb-4">
          Purple Headings
        </h1>
        <h2 className="text-3xl font-semibold text-purple-700 dark:text-purple-400 mb-3">
          For Brand Consistency
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use purple headings to maintain brand identity throughout your content.
        </p>
        <a
          href="#"
          className="text-purple-600 dark:text-purple-400 underline hover:text-purple-700 dark:hover:text-purple-300"
        >
          Learn more about branding
        </a>
      </div>

      <div className="border border-teal-500 bg-teal-50 dark:bg-zinc-900 p-8">
        <h1 className="text-5xl font-bold text-teal-700 dark:text-teal-400 mb-4">Teal Headings</h1>
        <h2 className="text-3xl font-semibold text-teal-700 dark:text-teal-400 mb-3">
          For Success & Validation
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use teal headings for success pages, confirmation screens, or validation sections.
        </p>
        <a
          href="#"
          className="text-teal-600 dark:text-teal-400 underline hover:text-teal-700 dark:hover:text-teal-300"
        >
          View validation docs
        </a>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-8">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">Neutral Headings</h1>
        <h2 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
          For Standard Content
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          Use neutral white/gray headings for documentation and general content.
        </p>
        <a
          href="#"
          className="text-zinc-600 dark:text-zinc-400 underline hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          Read documentation
        </a>
      </div>
    </div>
  </StoryWithCode>
)

export const ProseColors: Story = () => (
  <StoryWithCode
    title="Typography - Prose Color Schemes"
    description="Different color schemes for prose content: neutral gray, brand purple, and success teal. Adapt links and quotes to match."
    props={typographyProps}
  >
    <div className="p-8 space-y-12 bg-white dark:bg-zinc-950">
      <div className="border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-6">
        <article className="max-w-none text-zinc-800 dark:text-zinc-200">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
            Default - Neutral
          </h2>
          <p className="mb-4 leading-relaxed">
            This uses neutral colors that adapt to your theme.{" "}
            <a
              href="#"
              className="text-zinc-600 dark:text-zinc-400 underline hover:text-zinc-800 dark:hover:text-zinc-300"
            >
              Links are gray
            </a>{" "}
            and easy to read.
          </p>
          <blockquote className="border-l-2 border-zinc-400 dark:border-zinc-600 pl-4 italic text-zinc-600 dark:text-zinc-400">
            Neutral styling works well for documentation and long-form content.
          </blockquote>
        </article>
      </div>

      <div className="border border-purple-500 bg-purple-50 dark:bg-zinc-900 p-6">
        <article className="max-w-none text-zinc-800 dark:text-zinc-200">
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            Purple - Brand
          </h2>
          <p className="mb-4 leading-relaxed">
            Purple for brand consistency.{" "}
            <a
              href="#"
              className="text-purple-600 dark:text-purple-400 underline hover:text-purple-700 dark:hover:text-purple-300 font-medium"
            >
              Links are purple
            </a>{" "}
            to match your design system.
          </p>
          <blockquote className="border-l-2 border-purple-500 pl-4 italic text-purple-600 dark:text-purple-300">
            Purple maintains brand identity across light and dark themes.
          </blockquote>
        </article>
      </div>

      <div className="border border-teal-500 bg-teal-50 dark:bg-zinc-900 p-6">
        <article className="max-w-none text-zinc-800 dark:text-zinc-200">
          <h2 className="text-2xl font-semibold text-teal-700 dark:text-teal-400 mb-4">
            Teal - Success
          </h2>
          <p className="mb-4 leading-relaxed">
            Teal for validation and success.{" "}
            <a
              href="#"
              className="text-teal-600 dark:text-teal-400 underline hover:text-teal-700 dark:hover:text-teal-300 font-medium"
            >
              Links are teal
            </a>{" "}
            for positive actions.
          </p>
          <blockquote className="border-l-2 border-teal-500 pl-4 italic text-teal-600 dark:text-teal-300">
            Teal works great for success messaging and validation feedback.
          </blockquote>
        </article>
      </div>
    </div>
  </StoryWithCode>
)

export const ProseSizes: Story = () => (
  <StoryWithCode
    title="Typography - Prose Sizes"
    description="Four prose size variants: prose-sm (14px), prose (16px), prose-lg (18px), and prose-xl (20px). Choose based on content importance and space."
    props={typographyProps}
  >
    <div className="p-8 space-y-12 bg-white">
      <div className="border border-blue-500 bg-white p-6">
        <article className="prose-sm prose-zinc max-w-none">
          <h2 className="text-2xl font-bold text-zinc-900">Small (prose-sm) - 14px base</h2>
          <p className="text-sm text-zinc-800">
            This is the small size variant (14px base font). Perfect for dense content or sidebars
            where space is limited. Notice the smaller text size.
          </p>
          <code className="text-xs bg-blue-100 px-2 py-1 text-blue-900">
            Text size: 14px (text-sm)
          </code>
        </article>
      </div>

      <div className="border border-green-500 bg-white p-6">
        <article className="prose prose-zinc max-w-none">
          <h2 className="text-3xl font-bold text-zinc-900">Base (prose) - 16px base</h2>
          <p className="text-base text-zinc-800">
            This is the default base size (16px base font), ideal for most content. It provides
            excellent readability on all screen sizes.
          </p>
          <code className="text-sm bg-green-100 px-2 py-1 text-green-900">
            Text size: 16px (text-base)
          </code>
        </article>
      </div>

      <div className="border border-yellow-500 bg-white p-6">
        <article className="prose-lg prose-zinc max-w-none">
          <h2 className="text-4xl font-bold text-zinc-900">Large (prose-lg) - 18px base</h2>
          <p className="text-lg text-zinc-800">
            This is the large size variant (18px base font), great for hero sections or featured
            content that needs extra impact and readability.
          </p>
          <code className="text-base bg-yellow-100 px-2 py-1 text-yellow-900">
            Text size: 18px (text-lg)
          </code>
        </article>
      </div>

      <div className="border border-red-500 bg-white p-6">
        <article className="prose-xl prose-zinc max-w-none">
          <h2 className="text-5xl font-bold text-zinc-900">Extra Large (prose-xl) - 20px base</h2>
          <p className="text-xl text-zinc-800">
            This is the extra large variant (20px base font), perfect for landing pages or marketing
            content that needs to make a bold statement.
          </p>
          <code className="text-lg bg-red-100 px-2 py-1 text-red-900">
            Text size: 20px (text-xl)
          </code>
        </article>
      </div>
    </div>
  </StoryWithCode>
)
