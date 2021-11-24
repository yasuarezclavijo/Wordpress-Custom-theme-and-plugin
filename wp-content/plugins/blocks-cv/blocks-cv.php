<?php
/*
Plugin Name: Blocks curriculum vitae
Description: Un plugin para crear bloques con la nueva opción Gutenberg
Author: Yeison Suarez
Author URI: https://www.linkedin.com/in/yeison-andres-suarez-clavijo/
Version: 0.0.1
*/

function about_us() {
    wp_enqueue_script(
        'about_us', // nombre
        plugins_url('blocks-cv/build/index.js', dirname(__FILE__)),        // archivo script
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),    // dependencias
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js') // version
    );
}

add_action('enqueue_block_editor_assets', 'about_us');
