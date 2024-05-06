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
            'name' => fake()->sentence(3),
            'author' => fake()->sentence(2),
            'description' => fake()->realText(),
            'category' => fake()->randomElement(['philosophy', 'history', 'biography', 'business', 'adventure', 'fantasy']),
            'image_path' => '../../resources/images/books/img' . str_pad(rand(1, 38), 2, '0', STR_PAD_LEFT) . '.jpg',
            'pdf_path' => '../../resources/images/pdfs/book' . str_pad(rand(1, 10), 2, '0', STR_PAD_LEFT) . '.pdf',
            'language' => fake()->randomElement(['arabic', 'english', 'spanish', 'french', 'german']),
            'number_of_pages' => fake()->numberBetween(100, 500)
        ];
    }
}
