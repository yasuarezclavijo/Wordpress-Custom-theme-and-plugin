<?php
    the_title( '<h1 class="entry-title">', '</h1>' );
    the_content();
?>
<?php if ( get_edit_post_link() ) : ?>
    <footer class="entry-footer">
        <?php
        edit_post_link(
            sprintf(
                wp_kses(
                    /* translators: %s: Post title. Only visible to screen readers. */
                    __( 'Edit <span class="screen-reader-text">%s</span>', 'twentynineteen' ),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                get_the_title()
            ),
        );
        ?>
    </footer><!-- .entry-footer -->
<?php endif; ?>