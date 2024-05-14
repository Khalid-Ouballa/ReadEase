<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Book::query();

                if (request("name")) {
                    $query->where("name", "like", "%" . request("name") . "%");
                }

                if (request("author")) {
                    $query->where("author", "like", "%" . request("author") . "%");
                }

                if (request("category")) {
                    $query->where("category", request("category"));
                }

                if (request("language")) {
                    $query->where("language", request("language"));
                }

        $books = $query->paginate(20)->onEachSide(1);

        return inertia("Book/Index", [
            "books" => BookResource::collection($books),
            'queryParams' => request()->query() ?: null,
        ]);
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
    public function store(StoreBookRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return inertia('Book/Show', [
            'book' => new BookResource($book),
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
