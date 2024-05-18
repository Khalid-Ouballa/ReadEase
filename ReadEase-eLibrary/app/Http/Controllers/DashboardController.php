<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\Book;
use App\Models\Booklist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $completedBooks = Booklist::query()
            ->where('status', 'completed')
            ->where('user_id', $user->id)
            ->count();

        $notStartedBooks = Booklist::query()
            ->where('status', 'not_started')
            ->where('user_id', $user->id)
            ->count();

        $inProgressBooks = Booklist::query()
            ->where('status', 'in_progress')
            ->where('user_id', $user->id)
            ->count();

        $nbPages = Booklist::query()
            ->where('user_id', $user->id)
            ->sum('progress');

        // Retrieve the IDs of completed books for the user
        $completedBookIds = Booklist::query()
            ->where('status', 'completed')
            ->where('user_id', $user->id)
            ->pluck('book_id');

        // Retrieve the completed books using the Book model
        $completedBooksData = Book::query()
            ->whereIn('id', $completedBookIds)
            ->get();

        if ($completedBooksData->count() === 0) {
            $completedBooksData = collect(); // Set an empty collection when no books are completed
        } else {
            $completedRequest = app(Request::class);
            $completedPage = $completedRequest->input('completed_page', 1); // Get the current page from the request input
            $completedPage = intval($completedPage); // Convert $completedPage to an integer

            if (!is_numeric($completedPage) || $completedPage < 1) {
                $completedPage = 1; // Set a default value if $completedPage is not numeric or less than 1
            }
            $completedPerPage = 4; // Number of items per page

            $completedOffset = ($completedPage - 1) * $completedPerPage;
            $completedPaginatedItems = $completedBooksData->slice($completedOffset, $completedPerPage);
            $completedBooksData = new LengthAwarePaginator(
                $completedPaginatedItems,
                $completedBooksData->count(),
                $completedPerPage,
                $completedPage,
                [
                    'path' => LengthAwarePaginator::resolveCurrentPath(),
                    'pageName' => 'completed_page', // Specify the page parameter name as 'completed_page'
                ]
            );

            $completedBooksData = BookResource::collection($completedBooksData);
        }

        // Retrieve the IDs of in progress books for the user
        $inProgressBookIds = Booklist::query()
            ->where('status', 'in_progress')
            ->where('user_id', $user->id)
            ->pluck('book_id');

        // Retrieve the in progress books using the Book model
        $inProgressBooksData = Book::query()
            ->whereIn('id', $inProgressBookIds)
            ->get();

        if ($inProgressBooksData->count() === 0) {
            $inProgressBooksData = collect(); // Set an empty collection when no books are in progress
        } else {
            $inProgressRequest = app(Request::class);
            $inProgressPage = $inProgressRequest->input('in_progress_page', 1); // Get the current page from the request input
            $inProgressPage = intval($inProgressPage); // Convert $inProgressPage to an integer

            if (!is_numeric($inProgressPage) || $inProgressPage < 1) {
                $inProgressPage = 1; // Set a default value if $inProgressPage is not numeric or less than 1
            }
            $inProgressPerPage = 4; // Number of items per page

            $inProgressOffset = ($inProgressPage - 1) * $inProgressPerPage;
            $inProgressPaginatedItems = $inProgressBooksData->slice($inProgressOffset, $inProgressPerPage);

            $inProgressBooksData = new LengthAwarePaginator(
                $inProgressPaginatedItems,
                $inProgressBooksData->count(),
                $inProgressPerPage,
                $inProgressPage,
                [
                    'path' => LengthAwarePaginator::resolveCurrentPath(),
                    'pageName' => 'in_progress_page', // Specify the page parameter name as 'in_progress_page'
                ]
            );

            $inProgressBooksData = BookResource::collection($inProgressBooksData);
        }

        // Retrieve the IDs of not started books for the user
        $notStartedBookIds = Booklist::query()
            ->select('book_id')
            ->where('status', 'not_started')
            ->where('user_id', $user->id)
            ->pluck('book_id');

        // Retrieve the not started books using the Book model
        $notStartedBooksData = Book::query()
            ->whereIn('id', $notStartedBookIds)
            ->get();

        if ($notStartedBooksData->count() === 0) {
            $notStartedBooksData = collect(); // Set an empty collection when no books are not started
        } else {
            $notStartedRequest = app(Request::class);
            $notStartedPage = $notStartedRequest->input('not_started_page', 1); // Get the current page from the request input
            $notStartedPage = intval($notStartedPage); // Convert $notStartedPage to an integer

            if (!is_numeric($notStartedPage) || $notStartedPage < 1) {
                $notStartedPage = 1; // Set a default value if $notStartedPage is not numeric or less than 1
            }
            $notStartedPerPage = 4; // Number of items per page

            $notStartedOffset = ($notStartedPage - 1) * $notStartedPerPage;
            $notStartedPaginatedItems = $notStartedBooksData->slice($notStartedOffset, $notStartedPerPage);

            $notStartedBooksCount = $notStartedBooksData->count(); // Get the total count of not started books

            $notStartedBooksData = new LengthAwarePaginator(
                $notStartedPaginatedItems,
                $notStartedBooksCount, // Use the correct count value
                $notStartedPerPage,
                $notStartedPage,
                [
                    'path' => $notStartedRequest->url(), // Use the URL of the current request
                    'pageName' => 'not_started_page', // Specify the page parameter name as 'not_started_page'
                ]
            );

            $notStartedBooksData = BookResource::collection($notStartedBooksData);
        }

        return inertia('Dashboard', compact('completedBooks', 'notStartedBooks', 'inProgressBooks', 'nbPages', 'completedBooksData', 'notStartedBooksData', 'inProgressBooksData'));
    }


    public function destroy()
    {
    }
}
