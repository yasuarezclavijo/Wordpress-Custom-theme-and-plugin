<?php

function add_menu_link_item_class($classes, $item, $args) {
    if (property_exists($args, 'list_item_class')) {
        $classes['class'] = $args->list_item_class;
    }
    return $classes;
}

add_filter('nav_menu_link_attributes', 'add_menu_link_item_class', 1, 3);

function add_additional_class_li($classes, $item, $args) {
    if (property_exists($args, 'add_li_class')) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_li', 1, 3);