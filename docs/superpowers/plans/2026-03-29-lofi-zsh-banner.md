# Lofi Pastel ZSH Banner Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the DEVWIN + coffee cup ASCII banner in `~/.zshrc` with pastel candy colors and randomized steam.

**Architecture:** Replace color variables and echo statements in the existing `show_banner()` function. Add a steam randomizer using `$RANDOM`. No new files or dependencies.

**Tech Stack:** Zsh, ANSI 24-bit color escape codes (`\033[38;2;R;G;Bm`)

---

### Task 1: Replace color variables with pastel palette

**Files:**
- Modify: `~/.zshrc:184-226` (the `show_banner` function)

- [ ] **Step 1: Replace all color variable definitions (lines 185-203) with the new pastel palette**

Replace the entire color variable block with:

```bash
show_banner() {
  local r=$'\033[0m'

  # Pastel candy palette (lofi dreamy)
  local lavender=$'\033[38;2;180;160;220m'
  local peach=$'\033[38;2;240;190;150m'
  local mint=$'\033[38;2;160;220;200m'
  local pink=$'\033[38;2;230;170;180m'
  local butter=$'\033[38;2;240;220;160m'

  # Coffee cup colors
  local cream=$'\033[38;2;210;180;140m'
  local cpink=$'\033[38;2;230;170;180m'
  local brown=$'\033[38;2;160;120;90m'

  # Steam color
  local steam=$'\033[38;2;160;220;200m'
```

- [ ] **Step 2: Replace the DEVWIN echo lines (lines 207-211) with per-letter candy cycling**

Letter assignment: D=lavender, E=peach, V=mint, W=pink, I=butter, N=lavender

```bash
  #        D              E              V             W              I             N
  echo "${lavender}   ____  ${peach}_______   ${mint} ______ ${pink}_       ${butter}_______ ${lavender}_   ${peach}__${r}"
  echo "${lavender}  / __ \\${peach}/ ____/ ${mint}|  / / ${pink}__ \\ ${butter}|     / / ${lavender} _/ ${peach}/ | / /${r}"
  echo "${lavender} / / / /${peach} __/  ${mint}| | / / ${pink}/ / / ${butter}/ | /| / /${lavender}/ / ${peach}/  |/ / ${r}"
  echo "${lavender}/ /_/ /${peach} /___  ${mint}| |/ / ${pink}/ /_/ /|${butter} |/ |/ /${lavender}/ / ${peach}/ /|  /  ${r}"
  echo "${lavender}\\____/${peach}_____/  ${mint}|___/ ${pink}/_____/ ${butter}|__/|__/${lavender}___/${peach}_/ |_/   ${r}"
```

- [ ] **Step 3: Replace the subtitle line (line 212) with per-letter pastel cycling**

```bash
  echo "         ${lavender}[ ${lavender}V ${peach}I ${mint}B ${pink}E   ${butter}C ${lavender}O ${peach}D ${mint}E ${pink}R   ${butter}E ${lavender}D ${peach}I ${mint}T ${pink}I ${butter}O ${lavender}N ${peach}]${r}"
```

- [ ] **Step 4: Verify the changes so far**

Run: `source ~/.zshrc`
Expected: DEVWIN text displays in cycling pastel colors, subtitle cycles through the same palette.

- [ ] **Step 5: Commit**

```bash
git add -A  # nothing to add in repo, this is ~/.zshrc
```

No git commit for this step — `~/.zshrc` is outside the repo.

---

### Task 2: Add randomized steam and restyle coffee cup

**Files:**
- Modify: `~/.zshrc:184-226` (continuing in `show_banner`)

- [ ] **Step 1: Replace the steam and coffee cup echo lines (lines 214-224) with randomized steam + restyled cup**

```bash
  # Randomized steam
  local steam_variant=$(( RANDOM % 3 ))
  echo ""
  if [[ $steam_variant -eq 0 ]]; then
    echo "${steam}                  (  )   (   )  )${r}"
    echo "${steam}                   ) (   )  (  (${r}"
    echo "${steam}                   ( )  (    ) )${r}"
  elif [[ $steam_variant -eq 1 ]]; then
    echo "${steam}                   )  (    (  ) )${r}"
    echo "${steam}                   (    )  ) (  (${r}"
    echo "${steam}                    ) (   (   )  )${r}"
  else
    echo "${steam}                  ( )  (  )   (${r}"
    echo "${steam}                   )  (   ) (${r}"
    echo "${steam}                  (    ) (   ))${r}"
  fi

  # Coffee cup in warm tones
  echo "${cream}                   _____________${r}"
  echo "${cream}                  <_____________> ___${r}"
  echo "${cream}                  |             |/ _ \\ ${r}"
  echo "${cpink}                  |   L O - F I ${cream}| | | |${r}"
  echo "${cpink}                  |   B R E W   ${cream}|_| | |${r}"
  echo "${brown}               ___|             |\\___/${r}"
  echo "${brown}              /    \\___________/    \\ ${r}"
  echo "${brown}              \\_____________________/${r}"
  echo ""
}
```

- [ ] **Step 2: Verify the complete banner**

Run: Open 3-4 new terminal tabs.
Expected: Each tab shows the same pastel DEVWIN text but a different steam pattern (1 of 3 variants). Coffee cup is cream/pink/brown.

- [ ] **Step 3: Final review**

Read through `~/.zshrc` lines 184-end to confirm no leftover old color variables or duplicate echo lines.
