<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
// use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        // Inertia::share(['base_url' => env('APP_URL')]);
        // Inertia::share('user', function () {
        //     if (Auth::user()) {
        //         # code...
        //         return [
        //             'isLoggedIn' => true,
        //             'id' => Auth::user()->id,
        //             'name' => Auth::user()->name,
        //             'email' => Auth::user()->email,
        //         ];
        //     } else {
        //         # code...
        //         return [
        //             'isGuest' => true,
        //         ];
        //     }
        // });
    }
}
