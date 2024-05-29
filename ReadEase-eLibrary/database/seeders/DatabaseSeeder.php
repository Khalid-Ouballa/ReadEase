<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book;
use App\Models\Booklist;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()
        ->create([
            'id' => 1,
            'name' => 'TestUser',
            'email' => 'test@example.com',
            'password' => bcrypt('123.321A'),
        ]);

        User::factory(29)->create();

        Book::factory(100)->create();

        Booklist::factory(300)->create();
    }
}
