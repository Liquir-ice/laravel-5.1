## Laravel 5.1.26 PHP Framework

快速建立一個開發環境

----
## Integration

* [Gulp](http://gulpjs.com/)


## Requirement

* Linux or OS X
* PHP 5.4+
* Node 0.10.0+
* npm 2.0.0+
* Composer 1.0+

----
## Code Style

目前已知的 Guideline，大家務必遵從。


#### PHP
* [PSR-2]https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md


#### JavaScript
* [Airbnb]https://github.com/airbnb/javascript


#### CSS
* [PostCSS]https://github.com/postcss/postcss

#### Editor Config

詳細看 http://editorconfig.org

```
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
trim_trailing_white_space_on_save = true

[*.js]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false

[*.jade]
indent_style = space
indent_size = 2
```

----
## Step 1 - Installation
```bash
# 修改bower安裝的路徑
$ vim .bowerrc

# 修改bower安裝的套件
$ vim bower.json

# 按裝bower
$ bower install

# 修改package套件等等
$ vim package.json

# 安裝package裡的套件等
$ npm install

# 修改composer套件等等
$ vim composer.json

# 按裝composer
$ composer install
```

## Step 2 - Generate key
```bash
$ php artisan key:generate
```

## Step 3 - 執行gulp
```bash
# 開啟本機端的開發環境
$ gulp watch

# 如果是在production的話，記得寫script去執行
$ gulp --production
```



