<?php
global $showBorder;
$options = get_desing_plus_option();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<?php
     if($options['use_ogp']) {
?>
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<?php } else { ?>
<head>
<?php }; ?>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <meta name="description" content="<?php seo_description(); ?>">
    <?php if($options['use_ogp']) { ogp(); }; ?>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php
        wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js');
    ?>
    <?php wp_head(); ?>

    <?php
         if(is_page()) {
         $page_tcd_template_type = get_post_meta($post->ID,'page_tcd_template_type',true);
         if($page_tcd_template_type == 'type3'){
    ?>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.4.2/parallax.min.js"></script>
    <?php }; }; ?>

    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/parallax.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/agent.css" type="text/css" />

    <?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jscript.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/comment.js?ver=<?php echo version_num(); ?>"></script>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/comment-style.css" type="text/css" />

    <?php if(is_front_page()){ ?>
    <!-- carousel -->
    <?php if($options['top_content6_contents']=='image'){
        $top_content6_banner_image1 = wp_get_attachment_image_src($options['top_content6_banner_image1'], 'circle1');
        $top_content6_banner_image2 = wp_get_attachment_image_src($options['top_content6_banner_image2'], 'circle1');
        $top_content6_banner_image3 = wp_get_attachment_image_src($options['top_content6_banner_image3'], 'circle1');
        $top_content6_banner_image4 = wp_get_attachment_image_src($options['top_content6_banner_image4'], 'circle1');
        $top_content6_banner_image5 = wp_get_attachment_image_src($options['top_content6_banner_image5'], 'circle1');
        $c=0;
        if($top_content6_banner_image1[0]){$c++;};
        if($top_content6_banner_image2[0]){$c++;};
        if($top_content6_banner_image3[0]){$c++;};
        if($top_content6_banner_image4[0]){$c++;};
        if($top_content6_banner_image5[0]){$c++;};
    }else{
        $c=$options['number_posts'];
    }; ?>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/slick.min.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/js/slick.css"/>
    <script type="text/javascript" charset="utf-8">
        jQuery(window).load(function() {
            jQuery('.carousel').slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    </script>
    <!-- /carousel -->
    <?php }; ?>

    <style type="text/css">
        <?php if($showBorder) echo "#agent-header-outer{border-bottom:1px solid lightgrey}"; ?>
    </style>

    <style type="text/css">
    <?php
         $logo = dp_logo_to_display();
         if($logo) {
    ?>
    #logo_image { top:<?php echo $options['logotop']; ?>px; left:<?php echo $options['logoleft']; ?>px; }
    <?php }; ?>
    body { font-size:<?php echo $options['content_font_size']; ?>px; }
    .menu-item a:hover{color: #<?php echo $options['pickedcolor1']; ?> !important;}
    .title a:hover, .entry-meta a:hover, .post_category a:hover, .widget a:hover, .categories-wrap a:hover {color: #<?php echo $options['pickedcolor1']; ?>!important;}
    .dropdown-menu {
      background-color:#<?php echo $options['pickedcolor1']; ?>;
    }
    .dropdown-menu .menu-item:hover *{
      background:#<?php echo $options['pickedcolor2']; ?>!important;
    }
    .link-button-azure_top, .link-button-azure_btm{
      background-color:#<?php echo $options['pickedcolor1']; ?>!important;
    }
    .next-button:after { border-left-color:<?php echo $options['pickedcolor1']; ?>!important; border-bottom-color:<?php echo $options['pickedcolor1']; ?>!important; }
    .next-button:hover, .next-button:hover:after {border-color:<?php echo $options['pickedcolor2']; ?>!important;}
    .link-button-azure_top:hover, .link-button-azure_btm:hover {
      background:#<?php echo $options['pickedcolor2']; ?>!important;
    }
    .read-more:hover, .archives_btn:hover, .prev_link a:hover, .next_link a:hover, #submit_comment:hover, .form_table .btn-primary, .form_table td.form_title  { background:#<?php echo $options['pickedcolor1']; ?>!important; }

  @media only screen and (min-width: 767px) {
    .navbar-nav > .current-menu-item > a{color: #<?php echo $options['pickedcolor1']; ?> !important;}
  }

  @media only screen and (max-width: 767px) {
    .current-menu-item *{color: #<?php echo $options['pickedcolor1']; ?> !important;}
    .menu-item.active a {
      color:black;
    }
  }

    <?php if ($options['use_break_word']){ ?>
        p { word-wrap:break-word; }
    <?php }; ?>

    <?php echo $options['css_code']; ?>

    <?php if(get_post_meta($post->ID, "custom_css", true)){
        echo get_post_meta($post->ID, "custom_css", true);
    }; ?>

    <?php if($options['fixed_header']){ ?>
        #agent-header-outer{ position: fixed;}
    <?php }; ?>


    <?php if(is_front_page()){ ?>
        .top_content4_post .post-meta .title{ font-size: <?php echo $options['top_content4_fontsize']; ?>px;}
        #agent-splash-text{
            color: #<?php echo $options['top_content1_color']; ?>;
            text-shadow: <?php echo $options['top_content1_dropshadow_h']; ?>px <?php echo $options['top_content1_dropshadow_v']; ?>px <?php echo $options['top_content1_dropshadow_b']; ?>px #<?php echo $options['top_content1_dropshadow_c']; ?> !important;
        }
        .next-button{
            background-color: #<?php echo $options['top_content1_btnbgcolor']; ?>;
            color: #<?php echo $options['top_content1_btncolor']; ?>;
        }
        .next-button:after {
            border-left: 3px solid #<?php echo $options['top_content1_btncolor']; ?>;
            border-bottom: 3px solid #<?php echo $options['top_content1_btncolor']; ?>;
        }
    <?php }; ?>
    <?php if(is_archive()){ ?>
        .archive_post .post-meta .title{ font-size: <?php echo $options['archive_fontsize']; ?>px;}
    <?php }; ?>
    <?php if(is_single()){ ?>
        .page-title{ font-size: <?php echo $options['single_fontsize']; ?>px;}
    <?php }; ?>
    <?php if(is_singular( 'staff' ) ){ ?>
        .staff_headline{ font-size: <?php echo $options['staff_headline_fontsize']; ?>px;}
        .staff_desc{ font-size: <?php echo $options['staff_desc_fontsize']; ?>px;}
    <?php }; ?>
    <?php if(is_page()){ ?>
        .form_table td.form_title{ background: #<?php echo $options['pickedcolor1']; ?>; }
        .form_table .btn-primary{ background: #<?php echo $options['pickedcolor1']; ?>; }
        .form_table .btn-primary:hover{ background: #<?php echo $options['pickedcolor2']; ?>; }
    <?php }; ?>
    </style>
</head>

<body <?php body_class(); ?>>
    <?php do_action( 'before' ); ?>

    <div id="verytop"></div>
    <div id="agent-header-outer">
           <?php get_search_form(); ?>
            <div class="container hidden-xs hidden-sm hidden-md">
                <div class="row">
                    <div class="logo-wrap col-xs-20">
                      <!-- logo -->
                      <?php the_dp_logo(); ?>
                </div>
                    <div class="col-xs-100 col-md-100 col-lg-80 agent-header-menu romaji">
              <div class="navbar navbar-default">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav_toggle">
                    <span class="sr-only"><?php _e('Toggle navigation','_tk') ?> </span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                                <?php
                                        wp_nav_menu(array(
                                            'theme_location'    => 'primary',
                                            'depth'             => 0,
                                            'container'         => 'div',
                                            'container_class'   => 'collapse navbar-collapse nav_toggle',
                                            'menu_class'        => 'nav navbar-nav',
                                            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                                            'menu_id'           => 'main-menu',
                                            'walker'            => new wp_bootstrap_navwalker()
                                        ));
                                ?>
                            </div>
                        </div>
                    </div>
                    <?php if($options['header_url']){; ?><div class="col-xs-20 hidden-xs hidden-sm hidden-md"><a href="<?php echo $options['header_url']; ?>" class="link-button-azure_top"><span class="btn_lavel"><?php echo $options['header_btnlabel']; ?></span><span class="arrow_ico1"></span></a></div><?php }; ?>
                </div>
            </div>
            <div class="container hidden-lg">
          <div class="row">
<?php if($options['header_url']){; ?><div class="col-xs-20"><a
href="<?php echo $options['header_url']; ?>"
class="link-button-azure_top"><span class="btn_lavel"><?php echo
$options['header_btnlabel']; ?></span><span
class="arrow_ico1"></span></a></div><?php }; ?>
            <div class="site-navigation-inner col-xs-120">
              <div class="navbar navbar-default" style="margin-bottom:0px">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav_toggle" style='z-index:3000'>
                    <span class="sr-only"><?php _e('Toggle navigation','_tk') ?> </span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>

                  <div id="logo-area">
                    <?php the_dp_logo(); ?>
                  </div>

                </div>

                <!-- The WordPress Menu goes here -->
                <div class="">
                                <?php
                                        wp_nav_menu(array(
                                            'theme_location'    => 'primary',
                                            'depth'             => 0,
                                            'container'         => 'div',
                                            'container_class'   => 'collapse navbar-collapse nav_toggle',
                                            'menu_class'        => 'nav navbar-nav pt0',
                                            'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                                            'menu_id'           => 'main-menu',
                                            'walker'            => new wp_bootstrap_navwalker()
                                        ));
                                ?>
                </div>

              </div><!-- .navbar -->
            </div>
          </div>
            </div>
    </div>
