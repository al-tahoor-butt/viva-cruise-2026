---
name: google-workspace-mcp-access
description: Instructs the agent on how to access the user's Gmail, Drive, and Google Workspace data via their local MCP server.
trigger: always_on
---

# Google Workspace MCP Access
The user has a Google Workspace MCP server configured on their local machine.

Whenever the user asks to query their emails (Gmail), files (Google Drive), calendar, or any other Google Workspace data:
1. Do NOT state that you do not have access.
2. Use the `define_subagent` tool to define a new subagent (e.g., `WorkspaceSearcher`), making sure to set `enable_mcp_tools: true`.
3. Use the `invoke_subagent` tool to launch the subagent, prompting it to use the relevant MCP tools (e.g., `search_gmail_messages`, `get_gmail_message_content`, etc.) to find the requested information.
4. Wait for the subagent to report back with the results.
