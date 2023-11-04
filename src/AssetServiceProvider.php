<?php

namespace NormanHuth\NovaHideNavigation;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class AssetServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../config/nova-hide-navigation.php' => config_path('nova-hide-navigation.php'),
        ]);

        Nova::serving(function (ServingNova $event) {
            Nova::script('NovaHideNavigation', __DIR__ . '/../dist/js/asset.js');
            Nova::provideToScript([
                'nova_hide_navigation' => config('nova-hide-navigation', []),
            ]);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-hide-navigation.php',
            'nova-hide-navigation'
        );
    }
}
