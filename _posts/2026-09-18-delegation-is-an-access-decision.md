---
layout: post
title: "Delegation is an access decision, not a speed trick"
description: "Building a team of agents taught me that the description routes, the system prompt defines the role, and only the permission list actually enforces anything."
tags: ["agentic ai", "langchain"]
---

An AI agent allowed to read everything will eventually hold everything in one place. That is
a data governance problem before it is a performance problem, and it is the real reason to
split work across several agents rather than piling it onto one.

I spent today building a small team: a lead agent that coordinates and does none of the work
itself, and two specialists underneath it. Three things landed.

**A subagent is a context boundary.** It starts blank, does one bounded job, and returns its
result rather than its reasoning. The raw material it worked through never reaches the
coordinator at all, so a long research step costs the coordinator three sentences instead of
twenty pages.

**Three separate levers do the scoping and they blur together easily.** The description
decides who gets called. The system prompt defines the role. The permission list defines the
limit. Confuse them and you end up with an agent that has been politely asked to behave.

**Prompts request, permissions enforce.** A worker instructed not to open someone else's
notes still can. A deny rule on the path is what makes it true:

```python
FilesystemPermission(operations=["read", "write"], paths=["/scratch/<name>/**"], mode="allow"),
FilesystemPermission(operations=["write"], paths=["/**"], mode="deny"),
```

First match wins, so the allow lands before the blanket deny. Each worker gets a private
scratch folder and nothing else.

The script ends by reading the file tree back and checking for strays, because an isolation
claim you have not inspected is just a hope. That is the same throughline as everything else
in this course. The demo is never the hard part. Proving the boundary held is.

Code is in the [delegation folder](https://github.com/supreetbhat/DeepAgents/tree/main/delegation).
Next up: planning and longer running tasks.
