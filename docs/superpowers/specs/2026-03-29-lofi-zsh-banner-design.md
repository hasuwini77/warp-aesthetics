# Lofi Pastel ZSH Banner — Per-Letter Candy Colors

## Summary

Restyle the existing DEVWIN + coffee cup ASCII art banner in `~/.zshrc` with a pastel dreamy lofi aesthetic. Each letter-group cycles through 5 pastel colors. Steam is randomized on each terminal open.

## Color Palette

| Element             | Color         | RGB              |
|---------------------|---------------|------------------|
| Cycle color 1       | Lavender      | (180, 160, 220)  |
| Cycle color 2       | Soft peach    | (240, 190, 150)  |
| Cycle color 3       | Mint green    | (160, 220, 200)  |
| Cycle color 4       | Soft pink     | (230, 170, 180)  |
| Cycle color 5       | Butter yellow | (240, 220, 160)  |
| Coffee cup body     | Warm cream    | (210, 180, 140)  |
| Coffee label text   | Soft pink     | (230, 170, 180)  |
| Coffee base         | Warm brown    | (160, 120, 90)   |
| Steam               | Mint green    | (160, 220, 200)  |

## Letter Cycling

Each letter-group in "DEVWIN" (D, E, V, W, I, N) gets the next color in the 5-color rotation:
- D = Lavender, E = Soft peach, V = Mint green, W = Soft pink, I = Butter yellow, N = Lavender
- Same cycling applies to the `[VIBE CODER EDITION]` subtitle, per letter.

## Randomized Steam

Three steam pattern variants. On each terminal open, one is randomly selected:

```
Variant 1:            Variant 2:            Variant 3:
  (  )   (   )  )       )  (    (  ) )        ( )  (  )   (
   ) (   )  (  (        (    )  ) (  (          )  (   ) (
   ( )  (    ) )         ) (   (   )  )        (    ) (   ))
```

## Scope

- Only `~/.zshrc` is modified (the `show_banner` function, lines 184-231).
- ASCII art shapes are unchanged — only colors and steam logic change.
- The interactive-only guard remains.

## Out of Scope

- No changes to the prompt, plugins, or any other zsh config.
- No animated steam (was considered and declined).
