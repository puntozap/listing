<?php

use App\Http\Controllers\FinancialPeriodsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("financial-periods",FinancialPeriodsController::class);
Route::get("years",[FinancialPeriodsController::class,"yearList"]);
Route::post("search",[FinancialPeriodsController::class,"selectDate"]);
