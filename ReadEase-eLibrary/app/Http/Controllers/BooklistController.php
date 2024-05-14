<?php

namespace App\Http\Controllers;

use App\Models\Booklist;
use App\Http\Requests\StoreBooklistRequest;
use App\Http\Requests\UpdateBooklistRequest;
use Illuminate\Support\Facades\Auth;

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
    public function store(StoreBooklistRequest $request)
    {
        $data = $request->validated();

        $data['user_id'] = Auth::id();
        $data['book_id'] = 1;
        $data['status'] = "not_started";
        $data['progress'] = 0;
        Booklist::create($data);

        return route('book.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Booklist $booklist)
    {

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
