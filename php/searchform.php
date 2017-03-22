<form role="search" method="get" id="searchform" action="/">
    <input type="text" value="" name="s" class="s search" />
    <input type="submit" class="searchsubmit" value="検索" />
</form>


<style>
input.search {
        width: 180px;
        height: 24px;
        border: 1px solid #D6D6D6;
        text-align: right;
    }
    
    .searchsubmit {
        padding: 6px 20px;
        border: 1px solid #999;
        background: #999;
        color: #fff;
        font-size: 0.9em;
    }
    
    form#searchform {
        margin-top: 2em;
        display: flex;
        justify-content: flex-end;
    }
    
    @media(max-width:767px) {
        form#searchform {
           justify-content: flex-start;
        }
    }
    
    .search_results {
        width: 60%;
        margin-top: 200px;
        margin-right: auto;
        margin-left: auto;
    }

</style>