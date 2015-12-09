<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="title">Laravel 5</div>
            </div>
        </div>
        @section('header')
        @show

        @section('content')
        @show

        @section('footer')
        @show

        @section('js-footer')
            @if ( Config::get('app.debug') )
                <!-- build:js(public) js/all.js -->
                <script type="text/javascript" src="/vendor/jquery/dist/jquery.min.js"></script>
                <script type="text/javascript" src="/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="/js/commons/commons.js"></script>
                <!-- endbuild -->
            @else
                <script type="text/javascript" src="{{ elixir("js/all.js") }}"></script>
            @endif
        @show
    </body>
</html>
