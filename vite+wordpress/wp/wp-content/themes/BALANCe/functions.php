<?php
// ob_start();
$themaName = "BALANCe";
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__."/{$themaName}/functions/manifest-helper.php");
require_once(__ROOT__."/{$themaName}/functions/remove-head.php");
add_filter('show_admin_bar', '__return_false');