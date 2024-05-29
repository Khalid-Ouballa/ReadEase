<?php

namespace App\Http\Controllers;

use App\Models\Booklist;
use App\Models\Book;
use App\Http\Requests\StoreBooklistRequest;
use App\Http\Requests\UpdateBooklistRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;


class BooklistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // BooklistController.php

    // BooklistController.php

    public function index()
    {
        $leaderboard = DB::table('booklists')
            ->join('users', 'booklists.user_id', '=', 'users.id')
            ->select(
                'users.id',
                'users.name',
                DB::raw('SUM(booklists.progress) as total_pages_read'),
                DB::raw('COUNT(DISTINCT CASE WHEN booklists.status = "completed" THEN booklists.book_id END) as books_completed')
            )
            ->groupBy('users.id', 'users.name')
            ->orderByDesc('total_pages_read')
            ->orderByDesc('books_completed')
            ->paginate(10)->onEachSide(1);

        return Inertia::render('LeaderBoard', [
            'usersWithReadBooksCount' => $leaderboard,
        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Book $book)
    {

        $user = Auth::user();

        if ($user->booklists()->where('book_id', $book->id)->exists()) {
            return redirect()->back()->with('message', 'Book already in the list.');
        }
        $user->booklists()->create([
            'book_id' => $book->id,
            'status' => 'not_started',
            'progress' => 0,
        ]);
        return redirect()->back()->with('message', 'Book added successfully to your Not Started Books list');
    }

    /**
     * Display the specified resource.
     */
    public function show(Booklist $booklist)
    {
        //
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
    public function update(UpdateBooklistRequest $request, Book $book)
    {
        $user = Auth::user();
        $nbPage = $book->number_of_pages;

        // Validate the request data
        $request->validate([
            'progress' => 'required|integer|min:1',
        ]);

        DB::table('booklists')
            ->where('user_id', $user->id)
            ->where('book_id', $book->id)
            ->update(['progress' => $request->progress]);

        DB::table('booklists')
            ->where('user_id', $user->id)
            ->where('book_id', $book->id)
            ->where('progress', '>', 0)
            ->update(['status' => 'in_progress']);

        DB::table('booklists')
            ->where('user_id', $user->id)
            ->where('book_id', $book->id)
            ->where('progress', '>', $nbPage)
            ->update(['status' => 'completed']);

        return to_route('dashboard')->with('status', 'Progress updated successfully!');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $user = Auth::user();

        $user->booklists()->where('book_id', $book->id)->delete();
        return to_route('dashboard');
    }
}

