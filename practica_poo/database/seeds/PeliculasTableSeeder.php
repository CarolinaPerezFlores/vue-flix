<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Faker\Factory as Faker;

class PeliculasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach(range(1,100) as $index){
        DB::table('peliculas')->insert([
            'titulo' => $faker->sentence(5),
            'url_clean' => $faker->sentence(5),
            'reseña' => $faker->paragraph(4),
            'vista' => 'si',
            'duración' => '01:27:52',
            'fecha_estreno' => Carbon::parse('2000-01-01')
            
           ]);
        }
    }
}

