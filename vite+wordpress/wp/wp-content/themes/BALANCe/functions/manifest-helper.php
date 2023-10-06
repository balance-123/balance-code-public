<?php




function get_script_src(){
    $themaPath = get_template_directory();
    if(defined( 'DEV_ENV' )){
        $json = file_get_contents("{$themaPath}/manifest.dev.json");
        $data = json_decode($json,true);
        $url = $data['url'];
        $src = $url.'@vite/client';
        $src2 = $url.$data['inputs']['main'];
        echo "
        <script src='{$src}' type='module'></script>
        <script src='{$src2}' type='module'></script>
        ";

    }else if(file_exists("{$themaPath}/manifest.json")){
        $json = file_get_contents("{$themaPath}/manifest.json");
        $data = json_decode($json,true);
        $src = get_template_directory_uri().'/'.$data['js/main.js']['file'];
        wp_enqueue_script('main.js',$src, array(), '1.0.0'); 
    }
    
}


function get_style_src(){
    $themaPath = get_template_directory();
    if(defined( 'DEV_ENV' )){
        $json = file_get_contents("{$themaPath}/manifest.dev.json");
        $data = json_decode($json,true);
        $url = $data['url'];
        echo "<link href='{$url}{$data['inputs']['css']}' rel='stylesheet'></link>";
    }else if(file_exists("{$themaPath}/manifest.json")){
        $json = file_get_contents("{$themaPath}/manifest.json");
        $data = json_decode($json,true);
        $src = get_template_directory_uri().'/'.$data['css/style.scss']['file'];
        wp_enqueue_style('style',$src, array(), '1.0.0'); 
    }    
}
function enqueue_name(){
    
    get_script_src();
    get_style_src();
}
add_action('wp_enqueue_scripts','enqueue_name');
function add_type_attribute($tag, $handle, $src) {
    if ( 'main.js' !== $handle ) {
        return $tag;
    }
    $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
    return $tag;
}

add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);