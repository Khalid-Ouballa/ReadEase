<?php

namespace App\Http\Controllers;


use App\Models\Booklist;
use App\Http\Requests\StoreBooklistRequest;
use App\Http\Requests\UpdateBooklistRequest;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Book;
use Inertia\Inertia;

class BooklistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBooklistRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Booklist $booklist)
    {
        $usersWithReadBooksCount = User::select( 'users.name',
        DB::raw('COUNT(booklists.book_id) as books_read'),
        DB::raw('SUM(booklists.progress) as total_pages_read')
                 )
      ->leftJoin('booklists', 'users.id', '=', 'booklists.user_id')
      ->where('booklists.status', 'completed')
      ->groupBy( 'users.name')
      ->orderByDesc('total_pages_read')
      ->orderByDesc('books_read')
      ->get();
     
 return Inertia::render('LeaderBoard', [
     'usersWithReadBooksCount' =>  $usersWithReadBooksCount
     
 ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booklist $booklist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBooklistRequest $request, Booklist $booklist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booklist $booklist)
    {
        //
    }
}
