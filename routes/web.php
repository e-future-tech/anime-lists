<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\RecommendController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\WishlistController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/top/{page}', [ContentController::class, 'Top_Anime']);

Route::middleware('auth')->group(function () {
    Route::post('/favorite/save', [FavoriteController::class, 'store'])->name('favorite.store');
    Route::post('/favorite/delete', [FavoriteController::class, 'destroy'])->name('favorite.destroy');
    Route::get('/favorite', [FavoriteController::class, 'index'])->name('favorite.index');

    Route::post('/Wishlist/save', [WishlistController::class, 'store'])->name('wishlist.store');
    Route::post('/Wishlist/delete', [WishlistController::class, 'destroy'])->name('wishlist.destroy');
    Route::get('/wishlist', [WishlistController::class, 'index'])->name('wishlist.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [ContentController::class, 'Top_Anime_upcoming']);

Route::get('/search/{keyword}/{page}', [ContentController::class, 'search_by_name']);

Route::get('/seasons', [ContentController::class, 'seasons']);
Route::get('/seasons/{year}/{season}/{page?}', [ContentController::class, 'season_Content']);

Route::get('/detail/{id}', [DetailController::class, 'index']);
Route::get('/recommendations/{id}/{title}', [RecommendController::class, 'index']);

Route::get('/about', function () {
    return inertia::render('About');
});



require __DIR__ . '/auth.php';
