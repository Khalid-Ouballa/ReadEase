<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => implode(' ', array_slice(fake()->words(), 0, 3)),
            'author' => implode(' ', array_slice(fake()->words(), 0, 2)),
            'description' => fake()->paragraphs(4, true),
            'category' => fake()->randomElement(['philosophy', 'history', 'biography', 'business', 'adventure', 'fantasy']),
            'image_path' => 'books/img' . str_pad(rand(1, 38), 2, '0', STR_PAD_LEFT) . '.jpg',
            'pdf_path' => 'pdfs/book' . str_pad(rand(1, 10), 2, '0', STR_PAD_LEFT) . '.pdf',
            'language' => fake()->randomElement(['arabic', 'english', 'spanish', 'french', 'german']),
            'number_of_pages' => fake()->numberBetween(100, 500)
        ];
    }
}
