<?php

namespace App\Http\Controllers;

use App\Models\FinancialPeriod;
use Illuminate\Http\Request;

class FinancialPeriodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $FinancialPeriod=FinancialPeriod::get();
        return $FinancialPeriod;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:financial_periods|max:255',
            'start_date' => 'required',
            'end_date' => 'required',
            'number_week' => 'required',
        ]);


        $FinancialPeriod=new FinancialPeriod;
        $FinancialPeriod->name=$request->name;
        $FinancialPeriod->start_date=$request->start_date;
        $FinancialPeriod->end_date=$request->end_date;
        $FinancialPeriod->number_week=$request->number_week;
        $FinancialPeriod->save();
        
        return $FinancialPeriod;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FinancialPeriod  $FinancialPeriod
     * @return \Illuminate\Http\Response
     */
    public function show(FinancialPeriod $FinancialPeriod)
    {
        return $FinancialPeriod;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FinancialPeriod  $FinancialPeriod
     * @return \Illuminate\Http\Response
     */
    public function edit(FinancialPeriod $FinancialPeriod)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FinancialPeriod  $FinancialPeriod
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FinancialPeriod $FinancialPeriod)
    {
        $validated = $request->validate([
            'name' => 'required|unique:financial_periods|max:255',
            'start_date' => 'required',
            'end_date' => 'required',
            'number_week' => 'required',
        ]);
        
        $FinancialPeriod->name=$request->name;
        $FinancialPeriod->start_date=$request->start_date;
        $FinancialPeriod->end_date=$request->end_date;
        $FinancialPeriod->number_week=$request->number_week;
        $FinancialPeriod->save();
        
        return $FinancialPeriod;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FinancialPeriod  $FinancialPeriod
     * @return \Illuminate\Http\Response
     */
    public function destroy(FinancialPeriod $FinancialPeriod)
    {
        $FinancialPeriod->delete();

        return $FinancialPeriod;
    }
    public function yearList(){
        $FinancialPeriod=FinancialPeriod::get();
        $years=$FinancialPeriod->pluck("start_date");
        $Years=[];
        foreach($years as $y){
            $respond=$this->searching($Years,explode("-",$y)[0]);
            if($respond==false)
                array_push($Years,explode("-",$y)[0]);
        }
        return $Years;
    }
    public function searching($year,$check){
        foreach($year as $y){
            if($y==$check){
                return true;
            }
        }
        return false;
    }
    public function selectDate(Request $request){
        $FinancialPeriod=FinancialPeriod::get();
        $result=[];
        foreach($FinancialPeriod as $fi){
            if (stripos($fi->start_date, $request->year) !== false) {
                array_push($result,$fi);
            }
        }
        
          return $result;
    }
}
