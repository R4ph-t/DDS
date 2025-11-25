import type { Story } from "@ladle/react"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../src/components/ui/table"
import { Badge } from "../src/components/ui/badge"
import { createStoryWithCode } from "../.ladle/story-helpers"

const StoryWithCode = createStoryWithCode(import.meta.url)

const tableProps = [
  {
    name: "Table",
    type: "component",
    description: "Root table wrapper with overflow handling",
  },
  {
    name: "TableHeader",
    type: "component",
    description: "Table header section (thead)",
  },
  {
    name: "TableBody",
    type: "component",
    description: "Table body section (tbody)",
  },
  {
    name: "TableFooter",
    type: "component",
    description: "Table footer section (tfoot)",
  },
  {
    name: "TableRow",
    type: "component",
    description: "Table row with hover states",
  },
  {
    name: "TableHead",
    type: "component",
    description: "Table header cell (th)",
  },
  {
    name: "TableCell",
    type: "component",
    description: "Table data cell (td)",
  },
  {
    name: "TableCaption",
    type: "component",
    description: "Table caption for accessibility",
  },
]

export const Default: Story = () => (
  <StoryWithCode
    title="Table - Default"
    description="Basic table with header and body rows."
    props={tableProps}
  >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Region</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">my-web-service</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Web Service</TableCell>
          <TableCell className="text-right">Oregon</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">api-backend</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Web Service</TableCell>
          <TableCell className="text-right">Frankfurt</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">postgres-main</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>PostgreSQL</TableCell>
          <TableCell className="text-right">Oregon</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryWithCode>
)

export const WithBadges: Story = () => (
  <StoryWithCode
    title="Table - With Badges"
    description="Table combining with Badge components for rich status display."
    props={tableProps}
  >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead className="text-right">Last Deploy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">my-web-service</TableCell>
          <TableCell><Badge variant="green" size="sm">ACTIVE</Badge></TableCell>
          <TableCell><Badge variant="blue-light" size="sm">WEB</Badge></TableCell>
          <TableCell>Starter</TableCell>
          <TableCell className="text-right">2 hours ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">api-backend</TableCell>
          <TableCell><Badge variant="yellow" size="sm">DEPLOYING</Badge></TableCell>
          <TableCell><Badge variant="blue-light" size="sm">WEB</Badge></TableCell>
          <TableCell>Standard</TableCell>
          <TableCell className="text-right">5 minutes ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">cron-cleanup</TableCell>
          <TableCell><Badge variant="red" size="sm">FAILED</Badge></TableCell>
          <TableCell><Badge variant="purple-light" size="sm">CRON</Badge></TableCell>
          <TableCell>Free</TableCell>
          <TableCell className="text-right">1 day ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">postgres-main</TableCell>
          <TableCell><Badge variant="green" size="sm">ACTIVE</Badge></TableCell>
          <TableCell><Badge variant="green-light" size="sm">DATABASE</Badge></TableCell>
          <TableCell>Pro</TableCell>
          <TableCell className="text-right">3 days ago</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryWithCode>
)

export const WithCaption: Story = () => (
  <StoryWithCode
    title="Table - With Caption"
    description="Table with caption for accessibility and context."
    props={tableProps}
  >
    <Table>
      <TableCaption>A list of your recent deployments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Commit</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">web-app</TableCell>
          <TableCell className="font-mono text-xs">a1b2c3d</TableCell>
          <TableCell>Success</TableCell>
          <TableCell className="text-right">2m 34s</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">web-app</TableCell>
          <TableCell className="font-mono text-xs">e4f5g6h</TableCell>
          <TableCell>Success</TableCell>
          <TableCell className="text-right">2m 12s</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">web-app</TableCell>
          <TableCell className="font-mono text-xs">i7j8k9l</TableCell>
          <TableCell>Failed</TableCell>
          <TableCell className="text-right">0m 45s</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryWithCode>
)

export const WithFooter: Story = () => (
  <StoryWithCode
    title="Table - With Footer"
    description="Table with footer row for totals or summary data."
    props={tableProps}
  >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Resource</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Monthly Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Web Service (Standard)</TableCell>
          <TableCell>Compute</TableCell>
          <TableCell className="text-right">$25.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">PostgreSQL (Pro 4GB)</TableCell>
          <TableCell>Database</TableCell>
          <TableCell className="text-right">$45.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Redis (Starter)</TableCell>
          <TableCell>Cache</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right font-bold">$80.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </StoryWithCode>
)

export const Compact: Story = () => (
  <StoryWithCode
    title="Table - Compact"
    description="Compact table with reduced padding for dense data."
    props={tableProps}
  >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="py-2">Variable</TableHead>
          <TableHead className="py-2">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2 font-mono text-sm">DATABASE_URL</TableCell>
          <TableCell className="py-2 font-mono text-sm text-muted-foreground">postgres://...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 font-mono text-sm">REDIS_URL</TableCell>
          <TableCell className="py-2 font-mono text-sm text-muted-foreground">redis://...</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 font-mono text-sm">NODE_ENV</TableCell>
          <TableCell className="py-2 font-mono text-sm text-muted-foreground">production</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 font-mono text-sm">PORT</TableCell>
          <TableCell className="py-2 font-mono text-sm text-muted-foreground">10000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryWithCode>
)

