# Gemini CLI: Core Features and Commands Guide

This guide provides a comprehensive overview of **gemini-cli**, a terminal-based interface designed to bring the power of Gemini models directly into your development workflow.

## Key Features

- **Project-Specific Context:** Leverages `GEMINI.md` files for persistent instructions and local knowledge.
- **File System Integration:** Inject file contents into your prompts using the `@` symbol.
- **Direct Shell Interaction:** Execute shell commands directly from the CLI using the `!` prefix.
- **Extensibility:** Supports the Model Context Protocol (MCP) and custom "Agent Skills."
- **Safety & Control:** Includes **Plan Mode** for reviewing changes and **Restore** for undoing file modifications.

## Core Commands

| Command | Description |
| :--- | :--- |
| `/init` | Analyzes the current directory and generates a `GEMINI.md` context file tailored to your project. |
| `/compress` | Replaces the current chat context with a summary to save tokens while retaining key information. |
| `/chat` | Manage conversation history: `save`, `list`, `resume`, `share`. |
| `/memory` | Manage the instructional context from `GEMINI.md`: `show`, `list`, `refresh`, `add`. |
| `/model` | Switch between different Gemini models (e.g., `gemini-1.5-pro`). |
| `/plan` | Enter "Plan Mode" to review and approve proposed changes before execution. |
| `/restore` | Revert file changes made by the AI to a previous state. |
| `/rewind` | Step back through the conversation history and undo associated code changes. |
| `/settings` | Modify CLI configurations stored in `~/.gemini/settings.json`. |
| `/tools` | List and describe all available tools currently accessible to the model. |
| `/skills` | Enable, disable, or list specialized "Agent Skills." |
| `/directory` | Add or show workspace directories accessible to the CLI. |

## Input & Shell Shortcuts

- **`@<path>`**: Injects the content of a file or directory into your prompt.
  - *Example:* `@src/app.js Refactor this function.`
- **`!<command>`**: Executes a single shell command.
  - *Example:* `!npm install`
- **`!` (Toggle)**: Toggles "Shell Mode," where all inputs are treated as shell commands until toggled off.

---
*For more information, use the `/help` command within the Gemini CLI.*
