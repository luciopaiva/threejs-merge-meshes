
# Merging three.js meshes

The goal with this little experiment is to understand what needs to be done to merge multiples meshes into a single one.

The thought came to me when playing Townscaper.

![](img_1.png)

I exported a simple town as `.obj`, opened it in Blender and saw that all the pieces were merged into a single mesh:

![](img.png)

That's interesting because it's a single object being sent to the GPU, let alone there are redundant vertices since the hidden faces between blocks were deleted.
