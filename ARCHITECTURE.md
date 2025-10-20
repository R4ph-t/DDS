# DDS Architecture

## Two Separate Contexts

### 1. DDS Project (Development)
**Location:** `/Users/raph/Documents/dev/DDS`

**Purpose:** Develop and preview components

**Has:**
- ✅ Tailwind (devDependencies)
- ✅ Ladle for component preview
- ✅ React (devDependencies)
- ✅ All component source files

**Use:**
```bash
cd /Users/raph/Documents/dev/DDS
npm run ladle  # Preview components at http://localhost:61000
npm run build  # Build CLI for distribution
```

### 2. User Projects (Production)
**Location:** Any Next.js project where user runs `dds init`

**Purpose:** Use DDS components in real apps

**Gets from `dds init`:**
- ✅ Tailwind CSS (installed)
- ✅ shadcn/ui setup
- ✅ Shiki (syntax highlighting)
- ✅ CodeMirror (code editing)
- ❌ **NO Ladle** (not needed)

**Use:**
```bash
dds init              # One-time setup
dds add navigation    # Copy components
npm run dev           # Use in Next.js
```

## Why This Architecture?

### User Projects Don't Need Ladle Because:
1. **Components work in Next.js directly** - Just import and use
2. **Faster installation** - No extra preview tool
3. **Simpler setup** - Less to learn
4. **Production-focused** - Users want to build demos, not preview components

### DDS Project Needs Ladle Because:
1. **Component development** - Preview while building
2. **Documentation** - See all variants
3. **Testing** - Check dark mode, responsive, etc.
4. **Isolated environment** - Test without Next.js overhead

## File Flow

```
DDS Development (your machine)
├── templates/components/
│   ├── ui/
│   │   ├── code-editor.tsx
│   │   └── code-editor.stories.tsx  ← Ladle uses these
│   └── blocks/
│       └── navigation.tsx
└── npm run ladle → Preview at localhost:61000

        ⬇️  dds init & dds add

User Project (any Next.js app)
├── components/
│   ├── ui/
│   │   └── code-editor.tsx  ← Copied, no .stories files
│   └── blocks/
│       └── navigation.tsx   ← Copied
└── Just use in pages/app   ← No Ladle needed
```

## Dependencies Explained

### DDS package.json

**dependencies:**
- CLI tools (commander, clack, ora, etc.)
- Used when running `dds` command

**devDependencies:**
- React, Tailwind, Ladle
- Only for **developing** components
- NOT shipped to users

**Why it works:**
- CLI is compiled to `dist/` without React
- Templates are copied as-is to user projects
- User projects install their own React/Tailwind

## Commands

### DDS Project
```bash
npm run build       # Build CLI
npm run ladle       # Preview components (dev only)
npm run dev         # Watch mode for CLI changes
```

### User Projects
```bash
dds init            # Setup DDS in project
dds add [name]      # Copy components
npm run dev         # Next.js dev server
```

## Best Practices

1. **Develop components in DDS project** with Ladle preview
2. **Test in a real Next.js app** before finalizing
3. **Update stories** when changing components
4. **Rebuild CLI** (`npm run build`) after changes
5. **Users never see Ladle** - it's development-only

## Component Development Workflow

1. **Create component** in `templates/components/ui/`
2. **Create story** in same directory (`.stories.tsx`)
3. **Add to registry** in `templates/components/registry.json`
4. **Preview in Ladle** (`npm run ladle`)
5. **Rebuild CLI** (`npm run build`)
6. **Test in real project** (`dds add [name]`)

## Summary

- **DDS = Development tool** (has Ladle, Tailwind, React)
- **User projects = Production** (no Ladle, just components)
- **Separation is intentional** and keeps user projects clean
- **Ladle is a dev tool**, not a user-facing feature

