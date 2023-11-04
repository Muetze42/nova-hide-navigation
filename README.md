# Nova Hide Navigation

Hiding Sidebar, Header or Footer in [Laravel Nova](https://nova.laravel.com/).  
Just a small package. Useful if, for example, you want to use the Nova Dashboard on a smart TV in the office or
something. ☕

[![Live Preview](https://raw.githubusercontent.com/Muetze42/Muetze42/main/files/btn-live-preview.jpg)](https://nova-demo.huth.it/dashboards/main?hide=all)

## Installation

```shell
composer require norman-huth/nova-hide-navigation
```

## Usage

Add `hide` query param to the Nova url.

### Hide Nova Header

```
https://my-nova.app/dashboards/main?hide=h
```

### Hide Nova Sidebar

```
https://my-nova.app/dashboards/main?hide=s
```

### Hide Nova Footer

```
https://my-nova.app/dashboards/main?hide=f
```

### Combine

Examples

```
https://my-nova.app/dashboards/main?hide=fs
https://my-nova.app/dashboards/main?hide=hs
https://my-nova.app/dashboards/main?hide=hf
```

### Hide Header, Sidebar and Footer

```
https://my-nova.app/dashboards/main?hide=all
```

### Optional: Add Custom CSS Code To The Content Container

Publish the config file and set up:

```shell
php artisan vendor:publish --provider="NormanHuth\NovaHideNavigation\AssetServiceProvider"
```

Example:

```php
<?php

return [
    'if_hide_header' => 'padding-top: 1.0rem;',
    'if_hide_sidebar' => 'padding-left: 1.5rem;padding-right: 1.5rem;',
    'if_hide_footer' => 'padding-bottom: 1.5rem;',
];
```

---

[![More Laravel Nova Packages](https://raw.githubusercontent.com/Muetze42/asset-repo/main/svg/more-laravel-nova-packages.svg)](https://huth.it/nova-packages)

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://vshymanskyy.github.io/StandWithUkraine/)
