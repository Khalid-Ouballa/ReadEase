<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booklist>
 */
class BooklistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->numberBetween(1, 30),
            'book_id' => fake()->numberBetween(1, 100),
            'status' => fake()->randomElement(['completed', 'in_progress', 'not_started']),
            'progress' => fake()->numberBetween(1, 350)
        ];
    }
}
