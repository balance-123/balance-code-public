<?php
/**
 * wp_head()出力内容を整理
 */

/* WordPressのバージョン出力を排除する */
remove_action('wp_head','wp_generator');

/* JS, CSS要素のバージョン出力を排除する */
function remove_cssjs_ver2( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'remove_cssjs_ver2', 9999 );
add_filter( 'script_loader_src', 'remove_cssjs_ver2', 9999 );

/* テキストエディタの絵文字に対応する為の各種出力を排除する */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/* wlwmanifestの出力を排除する */
remove_action('wp_head', 'wlwmanifest_link');

/* 外部ブログツールからの投稿を行う為の出力を排除する */
remove_action('wp_head', 'rsd_link');

/* 短縮URLの出力を排除する */
remove_action('wp_head', 'wp_shortlink_wp_head');

/* DNS Prefetchingの出力を排除する */
remove_action('wp_head', 'wp_resource_hints', 2);

/* RSSフィードの出力を排除する */
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'feed_links_extra', 3 );

