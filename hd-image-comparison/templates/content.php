<?php if ($props['image'] && $props['link']) : ?>
<a href="<?= $props['link'] ?>"><img src="<?= $props['image'] ?>" alt="<?= $props['image_alt'] ?>"></a>
<?php elseif ($props['image']) : ?>
<img src="<?= $props['image'] ?>" alt="<?= $props['image_alt'] ?>">
<?php endif ?>
<?php if ($props['image_2']) : ?>
<img src="<?= $props['image_2'] ?>" alt="<?= $props['image_2_alt'] ?>">
<?php endif ?>