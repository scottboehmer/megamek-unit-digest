# MegaMek Unit Digest

*A collection of generated html files with summarized versions of the unit files from MegaMek.*

The generated html files are hosted with GitHub Pages here: [MegaMek Unit Digest](https://scottboehmer.github.io/megamek-unit-digest/)

## About

As an example of the format used by the generator, here is the generated summary for the Wolverine WVR-6R:

> ## Wolverine WVR-6R
> - **Role:** Skirmisher
> - **Tech Base:** Inner Sphere (2575)
> - **Chassis:** 55 tons
> - **Movement:** 5 / 8
>   - **Jumping:** 5
> - **Armor:** 152
> - **Heat Sinks:** 12 (12)
> - **Weapons:**
>   - AC/5 (ammo: 20)
>   - SRM 6 (ammo: 15)
>   - Medium Laser
> - **Source:** TRO 3039 - Star League
> - **Battle Value:** 1101

The html files in the `web` branch are generated from the mtf and blk files in the [MegaMek](https://github.com/MegaMek/megamek) repo (or more accurately, my [fork of MegaMek](https://github.com/scottboehmer/megamek) with some minor fixes to some files).
MegaMek is a networked Java implementation of the [BattleTech board game](https://bg.battletech.com/) from [Catalyst Game Labs](https://www.catalystgamelabs.com/).
The files are generated using a .Net Core tool that I have written that parses the mtf files into a list of mechs and then creates a markdown file for each name as well as an alphabetical list of names and a list of all variants sorted by weight and name. It is based on an decade-old mech editor that I wrote as a Silverlight out-of-browser app. While that editor is no longer functional since Silverlight is gone, it provided a nice code base for processing data files for BattleTech mechs.

The tool I have written is a work in progress and as a result this set of markdown files is incomplete and has errors. There are likely issues in the processing that are slipping by so that some mech summaries won't fully match the MegaMek files. In addition, there are issues with some of the mech files in MegaMek that mean that the generated summaries may not match the official designs even if they do match the MegaMek files.

Some of the major known limitations with my generator are:
- The summaries are intentionally less detailed than Technical Readout entries or record sheets. They are intended as quick summaries of the units, not a substitute for the actual board game products.
- Some unit types are not yet fully supported and will have missing or very abbreviated summaries.

If you happen to notice a problem with a unit's summary or have an idea for improving the summaries, feel free to [open an issue](https://github.com/scottboehmer/megamek-unit-digest/issues/new).
