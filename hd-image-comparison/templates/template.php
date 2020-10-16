<?php

$el = $this->el('div');

// Image Before
$image_before = $this->el('image', [

    'class' => [
        'el-image-before',
        'uk-border-{image_border}',
        'uk-box-shadow-{image_box_shadow}',
    ],

    'src' => $props['image_before'],
    'alt' => $props['image_before_alt'],
    'width' => $props['image_width'],
    'height' => $props['image_height'],
    'thumbnail' => true,
    'target' => $props['position'] === 'absolute' ? '!*' : '',
]);

// Image After
$image_after = $this->el('image', [

    'class' => [
        'el-image-after',
        'uk-border-{image_border}',
        'uk-box-shadow-{image_box_shadow}',
    ],

    'src' => $props['image_after'],
    'alt' => $props['image_after_alt'],
    'width' => $props['image_width'],
    'height' => $props['image_height'],
    'thumbnail' => true,
    'target' => $props['position'] === 'absolute' ? '!*' : '',
]);

// Slider
$slider = $this->el('div', [

    'class' => [
        'hd-image-comparison-slider',
        'uk-text-{icon_color}',
        'uk-background-{slider_background}',
    ],

    'uk-icon' => [
        'icon: {icon};',
        'width: {icon_width}; height: {icon_width}',
    ],

    'data-start' => [
        '{slider_start}',
    ],

    'data-width' => [
        '{icon_width}',
    ],

    'data-margin' => [
        '{icon_width}',
    ],

]);

// Box decoration
$decoration = $this->el('div', [

    'class' => [
        'uk-box-shadow-bottom {@image_box_decoration: shadow}',
        'tm-mask-default {@image_box_decoration: mask}',
        'tm-box-decoration-{image_box_decoration: default|primary|secondary}',
        'tm-box-decoration-inverse {@image_box_decoration_inverse} {@image_box_decoration: default|primary|secondary}',
        'uk-inline {@!image_box_decoration: |shadow}',
    ],

]);

?>

<?= $el($props, $attrs) ?>

    <div class="hd-image-comparison">
        <?php if ($props['image_box_decoration']) : ?>
        <?= $decoration($props) ?>
            <div class="hd-image-comparison-after"><?= $image_after($props) ?></div>
            <div class="hd-image-comparison-before"><?= $image_before($props) ?></div>
        <?= $decoration->end() ?>
        <?= $slider($props) ?></div>
        <?php else : ?>
        <div class="hd-image-comparison-after"><?= $image_after($props) ?></div>
        <div class="hd-image-comparison-before"><?= $image_before($props) ?></div>
        <?= $slider($props) ?></div>
        <?php endif ?>
    </div>

</div>
