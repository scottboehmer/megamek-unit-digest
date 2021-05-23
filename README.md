# MegaMek Unit Digest

*A collection of generated markdown files with summarized versions of the mechs from MegaMek.*

## The Units

- [Alphabetical Index](index.md)
- [Variant List](variants.md)

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

These markdown files are generated from the mtf files in the [MegaMek](https://github.com/MegaMek/megamek) repo (or more accurately, my [fork of MegaMek](https://github.com/scottboehmer/megamek) with some minor fixes to some files).
MegaMek is a networked Java implementation of the [BattleTech board game](https://bg.battletech.com/) from [Catalyst Game Labs](https://www.catalystgamelabs.com/).
The files are generated using a .Net Core tool that I have written that parses the mtf files into a list of mechs and then creates a markdown file for each name as well as an alphabetical list of names and a list of all variants sorted by weight and name. It is based on an decade-old mech editor that I wrote as a Silverlight out-of-browser app. While that editor is no longer functional since Silverlight is gone, it provided a nice code base for processing data files for BattleTech mechs.

The tool I have written is a work in progress and as a result this set of markdown files is incomplete and has errors. Right now, my tool successfully processes more than 95% of the mtf files from MegaMek. There are likely issues in the processing that are slipping by so that some mech summaries won't fully match the MegaMek files. In addition, there are issues with some of the mech files in MegaMek that mean that the generated summaries may not match the official designs even if they do match the MegaMek files.

Some of the major known limitations with my generator are:
- No support for super heavy mechs
- Lots of less frequently used components haven't been implemented yet
- Battle Value is not calculated for all designs that parse, and the calculations likely have bugs so you shouldn't trust those values yet. Use the [Master Unit List](http://masterunitlist.info/) for that instead.
- The summaries are intentionally less detailed than Technical Readout entries or record sheets. They are intended as quick summaries of the mechs, not a substitute for the actual board game products.
- The generated summary format includes an entry for the mech's role that is now generated from MegaMek's `unit_roles.txt` file. That file doesn't contain all of the units though, so some mechs will list `Undefined` as their role. As with Battle Value, the [Master Unit List](http://masterunitlist.info/) has that info if you need it.

If you're curious about the errors encountered by my parser, you can see the current list of errors here: [errors.txt](errors.txt).

If you happen to notice a problem with a mech's summary or have an idea for improving the summaries, feel free to [open an issue](https://github.com/scottboehmer/megamek-unit-digest/issues/new).
