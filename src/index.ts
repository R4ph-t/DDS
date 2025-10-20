import { Command } from "commander"
import { init } from "./commands/init.js"
import { add } from "./commands/add.js"

const program = new Command()

program
  .name("dds")
  .description("Demo Design System - Rapidly build beautiful demo projects")
  .version("0.1.0")

program
  .command("init")
  .description("Initialize DDS in your project")
  .option("-y, --yes", "Skip prompts and use defaults")
  .action(init)

program
  .command("add")
  .description("Add a component to your project")
  .argument("[components...]", "Component names to add")
  .action(add)

program.parse()
