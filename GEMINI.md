# 💎 GEMINI MANDATES

These instructions are foundational mandates for Gemini CLI in this workspace. They take absolute precedence over general workflows.

---

# 🚀 Git Worktree Workflow Guide (GIT_WORKFLOW.md)

A streamlined, advanced workflow optimized for sub-agents and parallel development. By using Git Worktrees, we can build multiple features simultaneously in completely isolated environments without git index conflicts, while still generating maximum GitHub activity.

---

## 📋 How to Prompt Sub-Agents

**When you want a sub-agent to build and implement a feature, say:**

```
Build a feature: [DESCRIBE YOUR FEATURE]

Follow the GIT_WORKFLOW.md process.
```

**What the Sub-Agent will do:**

1. ✅ **Create an isolated Git Worktree** outside the main project directory.
2. ✅ **Navigate to the Worktree** and install dependencies.
3. ✅ **Implement the feature** with high-frequency atomic commits.
4. ✅ **Ask you to test** the worktree environment before finalizing.
5. ✅ **Wait for your confirmation** that testing passed.
6. ✅ **Push the branch** to GitHub from the worktree.
7. ✅ **Create a Pull Request** with detailed description.
8. ✅ **Merge the PR** to main.
9. ✅ **Clean up the Worktree** automatically.

**IMPORTANT:** Agents will **NOT commit final changes or push** until you confirm the feature works after testing in their specific worktree. However, they will make frequent local atomic commits during development.

---

## 🤖 The Power of Sub-Agents & Parallelism

By using Git Worktrees (`git worktree add ../warped-aesthetics-<feature-name>`), the main repository remains completely untouched. This means you can dispatch multiple sub-agents to build different features at the exact same time:
- Agent A works in `../warped-aesthetics-auth`
- Agent B works in `../warped-aesthetics-ui`
- Agent C works in `../warped-aesthetics-api`

They each have their own `node_modules`, run their own dev servers on different ports, and make independent commits.

---

## 🎯 The Workflow (Step-by-Step)

### Step 1: Create Isolated Worktree

**Always create the worktree as a sibling directory to avoid messing with the main repo:**

```bash
git worktree add ../warped-aesthetics-your-feature-name -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation

### Step 2: Initialize & Implement

```bash
cd ../warped-aesthetics-your-feature-name
npm install
```

The agent writes the code and makes all necessary changes within this isolated folder.

### Step 3: Atomic Commits (High GitHub Activity 🟩)

**During implementation**, agents should create frequent, focused commits:

```bash
git add [specific-files]
git commit -m "type: description"
```

**Commit message types (Conventional Commits):**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting/styling
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

**🟩 More commits = More GitHub activity!** Break work into logical chunks. Even small progress should be committed locally inside the worktree.

### Step 4: Testing & Build Verification (CRITICAL!)

**Before pushing to remote:**
- The agent will ask you to test the feature in their specific worktree.
- Run a full production build locally in the worktree:

```bash
npm run build
```

**Never deploy or merge without a passing local build.** After deploying, verify MIME types if applicable:

```bash
./scripts/verify-mime-types.sh
```

### Step 5: Push Branch

```bash
git push -u origin feature/your-feature-name
```

### Step 6: Create Pull Request

```bash
gh pr create --title "Add [Feature Name]" \
  --body "## Summary
- Feature description
- What changed

## Changes
- File: What was modified

## Testing
- [x] Tested locally in Worktree
- [x] Feature works as expected
"
```

### Step 7: Merge Pull Request

```bash
# Merge PR via GitHub CLI
gh pr merge [PR-NUMBER] --merge --delete-branch
```

### Step 8: Version Tag (Run in Main Repo)

```bash
cd ../warped-aesthetics  # Return to main repo
git pull origin main
git tag -a v1.x.x -m "Added [feature name]"
git push origin v1.x.x
```

### Step 9: Cleanup Worktree (MANDATORY)

Once successfully merged to main, the worktree must be removed to free up space and maintain a clean environment.

```bash
cd ../warped-aesthetics  # Ensure you are in the main repo
git worktree remove ../warped-aesthetics-your-feature-name
git remote prune origin
```

---

## 📊 GitHub Activity Per Feature

Each feature generates massive activity:

- 🟩 Multiple Atomic Commits (aim for 5-10+ per feature)
- 🟩 Branch push
- 🟩 Pull request creation
- 🟩 Pull request merge
- 🟩 Version tag
- 🟩 Tag push

**Total: 10-15+ activities per feature!** 🟩✨

---

## 🤖 Example Prompts

### Dispatch Parallel Features
```
Agent 1: Build a feature: Add dark mode toggle to the navbar. Follow the GIT_WORKFLOW.md process.
Agent 2: Build a feature: Fix the search input not clearing after submission. Follow the GIT_WORKFLOW.md process.
```

---

## 🚨 Common Mistakes

❌ **Don't:** Run `git checkout -b` inside the main repo.
✅ **Do:** Always use `git worktree add ../warped-aesthetics-<name>` for complete isolation.

❌ **Don't:** Forget to run `npm install` in the new worktree.
✅ **Do:** Run `npm install` immediately after navigating into the new worktree.

❌ **Don't:** Leave old worktrees lingering.
✅ **Do:** Always run `git worktree remove` after a successful merge.

❌ **Don't:** Make one giant commit.
✅ **Do:** Break into logical atomic commits to maximize GitHub activity grid!

---

## 📚 Quick Reference

```bash
# Complete workflow in one view
git worktree add ../warped-aesthetics-feature-name -b feature/name  # Create Worktree
cd ../warped-aesthetics-feature-name                        # Enter Worktree
npm install                                            # Install deps
# [Agent implements feature & makes frequent commits]
npm run build                                          # Verify build
git push -u origin feature/name                        # Push branch
gh pr create --title "Title" --body "Description"      # Create PR
gh pr merge [#] --merge --delete-branch                # Merge PR
cd ../warped-aesthetics                                     # Return to Main Repo
git pull origin main                                   # Sync Main
git worktree remove ../warped-aesthetics-feature-name       # Cleanup Worktree
```
