<!-- search.php 抜粋 -->
<?php get_header(); ?>
<div id="contents">
 
<div class="search_results">
<?php if(have_posts()): ?>
<!-- 検索ワードを出力 -->
<h2>検索結果：「<?php the_search_query(); ?>」</h2>
 
<?php while(have_posts()): the_post(); ?>
 
<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
<p class="date"><?php echo get_the_date(); ?></p>
<div class="excerpt">
<?php the_excerpt(); ?>
<p><a href="<?php the_permalink(); ?>">続きを読む</a></p>
</div><!-- end of .excerpt -->
<?php endwhile; ?>
 
<!-- 検索ワードに該当する記事がない場合の処理-->
<?php else: ?>
<!-- 検索ワードを出力-->
<h2>「<span><?php the_search_query(); ?></span>」の検索結果が見つかりませんでした。</h2>
<p>別のキーワードでお試しください。</p>
<!-- 検索フォームを表示-->
<?php get_search_form(); ?>
<?php endif;  ?>
</div><!-- end of .search_results -->
 
</div><!-- end of #content -->




<style>

    .search_results {
        width: 60%;
        margin-top: 200px;
        margin-right: auto;
        margin-left: auto;
    }
</style>