<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BooklistController;
use App\Http\Controllers\LeaderBoardController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('Homepage');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
    Route::get('/dashboard/read/{book}', [BookController::class, 'show2'])
        ->name('book.show2');

    Route::get('/Leaderboard', [BooklistController::class, 'index'])
        ->name('leaderboard.index');


    Route::resource('book', BookController::class);
    Route::resource('booklist', BooklistController::class);
    Route::resource('user', UserController::class);

    Route::delete('/booklist/destroy/{book}', [BooklistController::class, 'destroy'])
        ->name('booklist.destroy');
    Route::post('/booklist/store/{book}', [BooklistController::class, 'store'])
        ->name('booklist.store');
    Route::put('/booklist/{book}/update', [BooklistController::class, 'update'])
        ->name('booklist.update')
        ->middleware('auth');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
