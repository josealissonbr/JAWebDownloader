<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', '\App\Http\Controllers\Web\HomeController@home')->name('home');

Route::get('/get-youtube-dl', '\App\Http\Controllers\Scrap\YoutubeController@getYoutubeDl')->name('scrap.youtube');
