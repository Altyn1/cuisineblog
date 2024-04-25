<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn() => [
    'version' => '1.x',
    'name' => 'Cookbook'
]);
