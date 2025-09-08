<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\RecommendController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\FavoriteController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/top', [ContentController::class, 'Top_Anime']);

Route::middleware('auth')->group(function () {



    Route::post('/favorite/save', [FavoriteController::class, 'store'])->name('favorite.store');
    Route::post('/favorite/delete', [FavoriteController::class, 'destroy'])->name('favorite.destroy');
    Route::get('/favorite', [FavoriteController::class, 'index'])->name('favorite.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [ContentController::class, 'Top_Anime_airing']);

Route::get('/search', [ContentController::class, 'index']);
Route::get('/search/{keyword}', [ContentController::class, 'index']);

Route::get('/seasons', [ContentController::class, 'seasons']);
Route::get('/seasons/{year}/{season}', [ContentController::class, 'season_Content']);



Route::get('/detail/{id}', [DetailController::class, 'index']);
Route::get('/recommendations/{id}/{title}', [RecommendController::class, 'index']);

Route::get('/about', function () {
    return inertia::render('About');
});



require __DIR__ . '/auth.php';
