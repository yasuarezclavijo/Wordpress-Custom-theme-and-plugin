<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_codificado' );

/** MySQL database username */
define( 'DB_USER', 'wordpress_user' );

/** MySQL database password */
define( 'DB_PASSWORD', 'XSj53gDKtwWb' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#ISc6bd1Q~g7Uy+TzfQ0O,*v|UA)-Q~cWdD4+)o2)hYJI[~zcqY^TZe6Y;|Dr!^:' );
define( 'SECURE_AUTH_KEY',  'C!<Fw=]p|<h-!o8*GAXl,k #Tw|~!}D.P75hC$w*5JP#&}ftf.bvJdw=zh^oDR7X' );
define( 'LOGGED_IN_KEY',    '}%8RqBvv_53q]<vHLCc%,F_:HnB^PHc2BA<IY#!iox@9^@=|&{N7Po#)_lBo5)<A' );
define( 'NONCE_KEY',        'yeu}dfK9zIg jEc|B0k~r&?)&Cb+}g- D,FQrKD/m[0A[|FtzQL,jGGD:>$xuY/N' );
define( 'AUTH_SALT',        'ni{@ryagr>&h/w_tN%TW%5|ym6^^Z)ZG(EbGau^D6x_pjhgPE>w+,W_kAzv]v*+H' );
define( 'SECURE_AUTH_SALT', '6+pJ+.PQMgMfds5!N7um*]:.##u$:J# d?d &!V,zX99ujw+Y=_R/+5A&S&T)!{z' );
define( 'LOGGED_IN_SALT',   '1&@f!XC^oD]~C+u0cQHp7V:^6tR*t)Ob+6!G(hKx+U1$TKJATv#{^_FvuV}.I?86' );
define( 'NONCE_SALT',       'yn aaG:]~P;sX5a!!25xh*fm=eis!L-4%tTW%Ed@j^I|q6jAp4`/nEIf*YXNpQ?V' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
